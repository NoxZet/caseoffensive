import React, { useEffect, useState } from 'react'
import { AxiosInstance } from 'axios';

import QuestResource from 'resource/Quest';
import QuestingResource from 'resource/Questing';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';

export default function QuestPage({axiosInstance} : {axiosInstance: AxiosInstance}) {
	const [quests, setQuests] = useState<(QuestResource & HasId)[]>([]);
	const [openQuestId, setOpenQuestId] = useState<number | null>(null);
	const [inProgressQuest, setInProgressQuest] = useState<QuestingResource | null>(null);

	function reloadQuests() {
		// Fetch list of currently available quests
		axiosInstance.get('/quest')
		.then(response => {
			setQuests(response.data);
		});
		// Fetch quest currently in progress
		axiosInstance.get('/questing')
		.then(response => {
			setInProgressQuest(response.data.length === 0 ? null : response.data[0])
		});
	};

	useEffect(reloadQuests, []);

	// Find the open (in UI) quest by filtering one with matching id
	const openQuest = (quests.filter(quest => quest.id === openQuestId)[0]) as QuestResource & HasId | undefined;

	return <div className='app-screen quest-screen'>
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
		<hr/>
		<div className='quest-details'>
			{openQuest
				? <QuestDetails quest={openQuest} inProgressQuest={inProgressQuest} reloadQuests={reloadQuests} axiosInstance={axiosInstance}/>
				: <div>Select a quest on the left</div>
			}
		</div>
	</div>;
}

function QuestDetails({quest, inProgressQuest, reloadQuests, axiosInstance} : {
	quest: QuestResource & HasId, inProgressQuest: QuestingResource | null, reloadQuests: () => any, axiosInstance: AxiosInstance
}) {
	// Sum the number of tickets in results to calculate chances of each result
	const resultTickets = quest.results.reduce((cum, result) => cum + result.tickets, 0) || 0;

	return <>
		<div className='quest-title'>{quest.name}</div>
		<div className='quest-drop-list-header'>Drops:</div>
		<ul>{quest.results.map(result => {
			return <li key={result.container.mainCollection}>
				{getCollectionContainerDisplayName(result.container.mainCollection)} - {Math.round(result.tickets / resultTickets * 10000) / 100}%
			</li>;
		})}</ul>
		<QuestProgress quest={quest} inProgressQuest={inProgressQuest} reloadQuests={reloadQuests} axiosInstance={axiosInstance}/>
	</>;
}

function QuestProgress({quest, inProgressQuest, reloadQuests, axiosInstance} : {
	quest: QuestResource & HasId, inProgressQuest: QuestingResource | null, reloadQuests: () => any, axiosInstance: AxiosInstance
}) {
	// TODO important: Pass an object down from App component for making requests with handling of token and unauthorized
	const token = localStorage.getItem('case_token');

	function startQuest() {
		axiosInstance.post('/questing', {
			questId: quest.id,
		})
		.then(response => {
			reloadQuests();
		});
	}

	function cancelQuest() {
		axiosInstance.delete('/questing')
		.then(response => {
			reloadQuests();
		});
	};

	function completeQuest() {
		axiosInstance.post('/questing/complete')
		.then(response => {
			reloadQuests();
		});
	};

	if (inProgressQuest === null) {
		return <div className='quest-progress'>
			<a href="#" onClick={startQuest}>Start quest</a>
		</div>;
	} else if (inProgressQuest.questId === quest.id) {
		return <div className='quest-progress'>
			<div>{inProgressQuest.currentDrops} / {inProgressQuest.maxDrops}</div>
			<a href="#" onClick={cancelQuest}>Cancel</a> | <a href="#" onClick={completeQuest}>Finish</a>
		</div>;
	} else {
		return <div className='quest-progress'>
			Already on a different quest
		</div>;
	}
}
