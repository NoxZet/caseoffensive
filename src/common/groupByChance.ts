export default function groupByChance<Drop>(
	drops: Drop[],
	chanceFun: (drop: Drop) => number
): {
	chance: number,
	drops: Drop[]
}[] {
	// We group items of the same chance together in the same order
	const chanceGroups = [];
	let currentGroup: Drop[] = [];
	for (let i = 0; i < drops.length; i++) {
		currentGroup.push(drops[i]);
		// After a chance group ends (ie. last item or next item has different chance), push result
		if (i + 1 >= drops.length || chanceFun(drops[i]) !== chanceFun(drops[i + 1])) {
			chanceGroups.push({
				chance: chanceFun(drops[i]),
				drops: currentGroup,
			});
			currentGroup = [];
		}
	}
	return chanceGroups;
}