import express from 'express';
import DbInterface from 'database/DbInterface';
import Security, { InvalidCredentials } from 'server/Security';

import { BaseModelId } from 'database/BaseModel';
import ContainerItem from 'database/ContainerItem';
import User from 'database/User';
import { createDropTickets, getRandomDrops } from 'opening/dropGenerator';
import SkinItem from 'database/SkinItem';
import { TicketSkin } from 'resource/Skin';

export default function addRoutes(app: express.Express, dbInterface: DbInterface, security: Security) {

app.get('/inventory/container', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
	const user: User & BaseModelId = res.locals.user;
	let page = Math.max(0, parseInt(req.query.page as any) || 0);
	try {
		const containers = await dbInterface.selectModel(ContainerItem,
			'WHERE owner_id = $1 ORDER BY created_at DESC LIMIT 20 OFFSET $2',
			[user.id, page * 20]
		);
		const containerCount = await dbInterface.selectCount(ContainerItem, 'WHERE owner_id = $1', [user.id]);
		res.status(200)
		.setHeader('next', `/inventory/container?page=${page + 1}`)
		.setHeader('count', containerCount)
		.json(
			containers.map(container => container.toResource())
		);
	} catch (error) {
		next(error);
	}
});

app.get('/inventory/skin', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
	const user: User & BaseModelId = res.locals.user;
	let page = Math.max(0, parseInt(req.query.page as any) || 0);
	try {
		const containers = await dbInterface.selectModel(SkinItem,
			'WHERE owner_id = $1 ORDER BY created_at DESC LIMIT 20 OFFSET $2',
			[user.id, page * 20]
		)
		const containerCount = await dbInterface.selectCount(SkinItem, 'WHERE owner_id = $1', [user.id]);
		res.status(200)
		.setHeader('next', `/inventory/skin?page=${page + 1}`)
		.setHeader('count', containerCount)
		.json(
			containers.map(container => container.toResource())
		);
	} catch (error) {
		next(error);
	}
});

app.get('/inventory/container/:containerId([0-9]+)/drops', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
	const user: User & BaseModelId = res.locals.user;
	const containerId: number = parseInt(req.params.containerId);
	try {
		const containers = await dbInterface.selectModel(ContainerItem,
			'WHERE owner_id = $1 AND id = $2',
			[user.id, containerId]
		);
		if (containers.length === 0) {
			res.status(404).json({
				'message': 'Invalid container'
			});
		} else {
			const container = containers[0];
			const { ticketArticles: ticketArticles, ticketSum: ticketSum } = createDropTickets(container, false);
			const results: TicketSkin[] = [];
			for (const article of ticketArticles) {
				results.push({
					chance: article.tickets / ticketSum,
					item: article.skin === 'specialSet'
						? {special: true as true, quality: article.quality, collection: article.collection}
						: (new SkinItem(article.skin.weapon, article.skin.skin, article.quality, 0, container.level, [])).toResource()
				});
			}
			res.status(200).json(results);
		}
	} catch (error) {
		next(error);
	}
});

app.post('/inventory/container/:containerId([0-9]+)/open', security.getUserMiddleware, async function (req: express.Request, res: express.Response, next: Function) {
	const user: User & BaseModelId = res.locals.user;
	const containerId: number = parseInt(req.params.containerId);
	try {
		const containers = await dbInterface.selectModel(ContainerItem,
			'WHERE owner_id = $1 AND id = $2',
			[user.id, containerId]
		);
		//console.log(containers);
		if (containers.length === 0) {
			res.status(404).json({
				'message': 'Invalid container'
			});
		} else {
			const drops = getRandomDrops(containers[0], 39);
			const final = drops.pop()!;
			await dbInterface.deleteModel(containers[0]);
			final.original_owner_id = user.id;
			final.owner_id = user.id;
			final.created_at = new Date();
			await dbInterface.insertModel(final);
			res.status(200).json({
				'final': final.toResource(),
				'alternative': drops.map(skin => skin.toResource()),
			})
		}
	} catch (error) {
		next(error);
	}
});

}
