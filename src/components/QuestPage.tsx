import React, { useEffect, useState } from 'react'
import axios from 'axios';

import QuestResource from 'resource/Quest';

export default function QuestPage({} : {}) {
	const [quests, setQuests] = useState<QuestResource[]>([]);
	const [openQuestId, setOpenQuestId] = useState<number | null>(null);

	function reloadQuests() {
		axios.get('/quest')
		.then(response => {
			setQuests(response.data);
		});
	};

	useEffect(reloadQuests, []);

	return <></>;
}
