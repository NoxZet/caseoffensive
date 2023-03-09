export type SimplePrefix = 'lunar' | 'solar' | 'blood' | 'souvenir';
export type ChancePrefix = 'stattrak';
export type Prefix = SimplePrefix | ChancePrefix;

function getPrefixOrder(prefix: Prefix): number {
	switch (prefix) {
		case 'souvenir': return 0;
		case 'stattrak': return 10;
		case 'solar': return 20;
		case 'blood': return 30;
		case 'lunar': return 40;
	}
}

function sortPrefixes(prefixes: Prefix[]): void {
	prefixes.sort((a, b) => getPrefixOrder(a) - getPrefixOrder(b));
}
