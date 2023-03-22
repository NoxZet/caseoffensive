import express from 'express';
import DbInterface, { NoResult } from 'database/DbInterface';
import Security, { InvalidCredentials } from 'server/Security';
import Questing, { AlreadyOnQuest, QuestNotActiveToday } from 'questing/Questing';

import { BaseModelId } from 'database/BaseModel';
import User from 'database/User';
import Quest from 'database/Quest';

export default function addRoutes(app: express.Express, dbInterface: DbInterface, security: Security, questing: Questing) {
	app.get('/quest', async function (req: express.Request, res: express.Response, next: Function) {
		const today = questing.getTimeDay(new Date());
		const quests = await dbInterface.selectModel(Quest, 
			'WHERE start_time <= $1 AND end_time >= $1', [today]
		);
		// TODO: return array of items that can drop for each quest
		res.status(200).json(
			quests.map(quest => ({id: quest.id, name: quest.displayName, collection: quest.collection}))
		);
	});

	app.post('/questing', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
		const user: User & BaseModelId = res.locals.user;
		const quest_id = req.body.quest_id;
		if (typeof quest_id !== 'number') {
			res.status(400).json({
				'message': 'Invalid request body',
			});
			return;
		}
		try {
			const quest = await dbInterface.selectModelById(Quest, quest_id);
			await questing.startUserQuest(user, quest);
			res.status(200).json({
				'message': 'OK'
			});
		} catch (error) {
			if (error instanceof NoResult || error instanceof QuestNotActiveToday) {
				res.status(404).json({
					'message': 'Invalid quest'
				});
			} else if (error instanceof AlreadyOnQuest) {
				res.status(409).json({
					'message': 'Already at different quest'
				});
			} else {
				next(error);
			}
		}
	});
};
