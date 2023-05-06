import React, { useEffect, useState } from 'react'
import { AxiosInstanceAuthError } from 'common/makeAxiosAuthError';

import QuestResource from 'resource/Quest';
import QuestingResource from 'resource/Questing';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';

export default function QuestPage({axiosInstance} : {axiosInstance: AxiosInstanceAuthError}) {
	const [quests, setQuests] = useState<(QuestResource & HasId)[]>([]);
	const [openQuestId, setOpenQuestId] = useState<number | null>(null);
	const [inProgressQuest, setInProgressQuest] = useState<QuestingResource | null>(null);

	function reloadQuests() {
		// Fetch list of currently available quests
		axiosInstance.get('/quest')
		.then(response => {
			setQuests(response.data);
		})
		.catch((error) => axiosInstance.authErrorCheck(error));
		// Fetch quest currently in progress
		axiosInstance.get('/questing')
		.then(response => {
			setInProgressQuest(response.data.length === 0 ? null : response.data[0])
		})
		.catch((error) => axiosInstance.authErrorCheck(error));
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
	quest: QuestResource & HasId, inProgressQuest: QuestingResource | null, reloadQuests: () => any, axiosInstance: AxiosInstanceAuthError
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
	quest: QuestResource & HasId, inProgressQuest: QuestingResource | null, reloadQuests: () => any, axiosInstance: AxiosInstanceAuthError
}) {
	function startQuest() {
		axiosInstance.post('/questing', {
			questId: quest.id,
		})
		.then(response => {
			reloadQuests();
		})
		.catch((error) => axiosInstance.authErrorCheck(error));
	}

	function cancelQuest() {
		axiosInstance.delete('/questing')
		.then(response => {
			reloadQuests();
		})
		.catch((error) => axiosInstance.authErrorCheck(error));
	};

	function completeQuest() {
		axiosInstance.post('/questing/complete')
		.then(response => {
			reloadQuests();
		})
		.catch((error) => axiosInstance.authErrorCheck(error));
	};

	if (inProgressQuest === null) {
		return <div className='quest-progress'>
			<a href="#" onClick={startQuest}>Start quest</a>
		</div>;
	} else if (inProgressQuest.questId === quest.id) {
		return <div className='quest-progress'>
			<QuestProgressBar questing={inProgressQuest}/>
			<a href="#" onClick={cancelQuest}>Cancel</a> | <a href="#" onClick={completeQuest}>Finish</a>
		</div>;
	} else {
		return <div className='quest-progress'>
			Already on a different quest
		</div>;
	}
}

function QuestProgressBar({questing: inputQuesting} : {questing: QuestingResource}) {
	const [currentQuesting, setCurrentQuesting] = useState(inputQuesting);
	const [progressTimeout, setProgressTimeout] = useState<NodeJS.Timeout | undefined>(undefined);

	useEffect(() => {
		doProgressTimeout();
		return () => {
			// Clear animation finish timeout so we don't set state on removed component
			if (progressTimeout !== undefined) {
				clearTimeout(progressTimeout);
			}
		}
	}, []);

	// Progresses questing variable
	// - if we reached the time of next drop, increments number of drops
	// - if we haven't reached the maximum number of drops, sets timeout for the next drop (recursive)
	function doProgressTimeout() {
		// currentQuesting is the initial value here (reference doesn't update between calls), but it's fine because we update it to correct value with multiple whiles
		if (currentQuesting.currentDrops < currentQuesting.maxDrops) {
			const newQuesting = Object.assign({}, currentQuesting);
			while ((new Date).getTime() >= newQuesting.nextDrop) {
				newQuesting.currentDrops++;
				newQuesting.nextDrop += newQuesting.questLength;
				setCurrentQuesting(newQuesting);
			}
			if (newQuesting.currentDrops < newQuesting.maxDrops) {
				setProgressTimeout(setTimeout(doProgressTimeout, newQuesting.nextDrop - (new Date).getTime()));
			}
		}
	}

	const currentProgress = 1 - (currentQuesting.nextDrop - (new Date).getTime()) / currentQuesting.questLength;

	// TODO: The animation doesn't update properly when page is unfocused
	// Need to investigate more but I think timeout is called correctly for rerendering but animation doesn't start until refocused
	return <div className='quest-bar-frame'>
		<div className='quest-bar-number'>{`${currentQuesting.currentDrops} / ${currentQuesting.maxDrops}`}</div>
		<div className='quest-bar-loader-frame' key={`${currentQuesting.questId}-${currentQuesting.currentDrops}`}>
			{currentQuesting.currentDrops < currentQuesting.maxDrops
				? <div className='quest-bar-loader-bar' style={{
					['--starting-progress' as any]: currentProgress,
					['--progress-duration' as any]: (1 - currentProgress) * currentQuesting.questLength + 'ms',
				}}></div>
				: <div className='quest-bar-loader-bar quest-bar-loader-done'></div>
			}
		</div>
	</div>;
}
