import React, { useEffect, useState } from 'react'
import axios from 'axios';

import QuestResource from 'resource/Quest';
import QuestingResource from 'resource/Questing';

export default function QuestPage({} : {}) {
	const [quests, setQuests] = useState<QuestResource[]>([]);
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

	return <></>;
}
