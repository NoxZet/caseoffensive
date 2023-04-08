import express from 'express';
import DbInterface, { NoResult } from 'database/DbInterface';
import Security, { InvalidCredentials } from 'server/Security';
import Questing, { AlreadyOnQuest, QuestNotActiveToday } from 'server/Questing';

import { BaseModelId } from 'database/BaseModel';
import User from 'database/User';
import Quest from 'database/Quest';
import QuestResult from 'database/QuestResult';
import QuestResource from 'resource/Quest';
import QuestingResource from 'resource/Questing';

export default function addRoutes(app: express.Express, dbInterface: DbInterface, security: Security, questing: Questing) {
	app.get('/quest', async function (req: express.Request, res: express.Response, next: Function) {
		const today = questing.getTimeDay(new Date());
		const quests = await dbInterface.selectModel(Quest, 
			'WHERE start_time <= $1 AND end_time >= $1', [today]
		);
		// Fetch QuestResults for the given Quests into an extra map
		const questResults: { [key: number]: QuestResult[] } = {};
		for (const quest of quests) {
			questResults[quest.id] = await dbInterface.selectModel(QuestResult,
				'WHERE quest_id = $1', [quest.id]
			);
		}
		const questResources: QuestResource[] = quests.map(quest => ({
			id: quest.id,
			name: quest.displayName,
			results: questResults[quest.id] ? questResults[quest.id].map(result => result.toResource()) : [],
		}));
		res.status(200).json(
			questResources
		);
	});

	app.post('/questing', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
		const user: User & BaseModelId = res.locals.user;
		const questId = req.body.questId;
		if (typeof questId !== 'number') {
			res.status(400).json({
				'message': 'Invalid request body',
			});
			return;
		}
		try {
			const quest = await dbInterface.selectModelById(Quest, questId);
			await questing.startUserQuest(user, quest);
			res.status(200).json({
				'message': 'OK',
			});
		} catch (error) {
			if (error instanceof NoResult || error instanceof QuestNotActiveToday) {
				res.status(404).json({
					'message': 'Invalid quest',
				});
			} else if (error instanceof AlreadyOnQuest) {
				res.status(409).json({
					'message': 'Already on a different quest',
				});
			} else {
				next(error);
			}
		}
	});
	
	app.get('/questing', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
		const user: User & BaseModelId = res.locals.user;
		const currentQuest = await questing.getCurrentQuest(user);
		const result: QuestingResource[] = currentQuest ? [{
			questId: currentQuest.quest_id,
			startTime: currentQuest.startTime,
			...(await questing.getCurrentDropCount(currentQuest)),
		}] : []
		res.status(200).json(result);
	});

	app.post('/questing/complete', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
		const user: User & BaseModelId = res.locals.user;
		try {
			const drops = await questing.completeUsersQuest(user);
			if (drops) {
				// TODO: show drops here
				res.status(200).json({
					'drops': drops.map(container => container.toResource()),
				});
			} else {
				res.status(404).json({
					'message': 'Not on a quest',
				});
			}
		} catch (error) {
			next(error);
		}
	});

	app.delete('/questing', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
		const user: User & BaseModelId = res.locals.user;
		try {
			if (await questing.cancelUsersQuest(user)) {
				// TODO: show drops here
				res.status(200).json({
					'message': 'OK',
				});
			} else {
				res.status(404).json({
					'message': 'Not on a quest',
				});
			}
		} catch (error) {
			next(error);
		}
	});
};
