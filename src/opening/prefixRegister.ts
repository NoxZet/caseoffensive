// If container has simple prefix, all opened items will always have it
const prefixes = ['souvenir', 'stattrak', 'jolly', 'cheerful', 'festive', 'lunar', 'solar', 'blood'] as const;
export type Prefix = typeof prefixes[number];

export type PrefixData = boolean | number | { ticketSum: number, outcomes: { tickets: number, prefix: Prefix | null }[] };
export const prefixChance: {[prefix in Prefix]: PrefixData} = {
	lunar: true, solar: true, blood: true, souvenir: true,
	jolly: false, cheerful: false,
	stattrak: 10,
	festive: { ticketSum: 31, outcomes: [
		{ tickets: 1, prefix: 'festive' },
		{ tickets: 5, prefix: 'cheerful' },
		{ tickets: 25, prefix: 'jolly' },
	]},
};

function getPrefixOrder(prefix: Prefix): number {
	return prefixes.indexOf(prefix);
}

function sortPrefixes(prefixes: Prefix[]): void {
	prefixes.sort((a, b) => getPrefixOrder(a) - getPrefixOrder(b));
}
