import React, { useEffect, useState } from 'react'
import axios from 'axios';

import QuestResource from 'resource/Quest';
import QuestingResource from 'resource/Questing';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';

export default function QuestPage({} : {}) {
	const [quests, setQuests] = useState<(QuestResource & HasId)[]>([]);
	const [openQuestId, setOpenQuestId] = useState<number | null>(null);
	const [inProgressQuest, setInProgressQuest] = useState<QuestingResource | null>(null);

	function reloadQuests() {
		// Fetch list of currently available quests
		axios.get('/quest')
		.then(response => {
			setQuests(response.data);
		});
		// Fetch quest currently in progress
		axios.get('/questing')
		.then(response => {
			setInProgressQuest(response.data.length === 0 ? null : response.data[0])
		});
	};

	useEffect(reloadQuests, []);

	const openQuest = (quests.filter(quest => quest.id === openQuestId)[0]) as QuestResource & HasId | undefined;
	const resultTickets = openQuest?.results.reduce((cum, result) => cum + result.tickets, 0) || 0;

	return <>
		<div className='quest-list-bar'>
			{quests.map(quest => {
				const isOpen = quest.id === openQuestId;
				const isInProgress = quest.id === inProgressQuest?.questId;
				const className = 'quest-list-item' + (isOpen ? ' quest-open' : '') + (isInProgress ? ' quest-in-progress' : '');
				return <div key={quest.id} onClick={() => setOpenQuestId(quest.id)} className={className}>
					<div className='quest-title'>{quest.name}</div>
					<div className='quest-progress'>{isInProgress ? `${inProgressQuest.currentDrops} / ${inProgressQuest.maxDrops}` : 'Available'}</div>
				</div>;
			})}
		</div>
		<div className='quest-details'>
			{openQuest && resultTickets
				? <>
					<div className='quest-title'>{openQuest.name}</div>
					<div className='quest-drop-list-header'>Drops:</div>
					<ul>{openQuest.results.map(result => {
						return <li>
							{getCollectionContainerDisplayName(result.container.mainCollection)} - {Math.round(result.tickets / resultTickets * 10000) / 100}%
						</li>;
					})}</ul>
				</>
				: <div>Select quest on the left</div>
			}
		</div>
	</>;
}
