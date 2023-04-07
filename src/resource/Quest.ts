import QuestResult from "./QuestResult";

type Quest = {
	id: number | undefined,
	name: string,
	results: QuestResult[],
};
export default Quest;
