export const knifeCollections = [
	'knife1Old', 'knife1Chroma', 'knife1Gamma',
	'knifeHuntsmanOld', 'knifeButterflyOld', 'knifeFalchionOld', 'knifeShadowsOld', 'knifeBowieOld',
	'knife2Chroma', 'knife2Gamma',
	'knife3Old', 'knife3Chroma',
	'knifeClassicOld', 'knife4Old',
] as const;
export type KnifeCollection = typeof knifeCollections[number];

export const gloveCollections = ['glove2', 'glove3'] as const;
export type GloveCollection = typeof gloveCollections[number];

export const specialCollections = [...knifeCollections, ...gloveCollections] as const;
export type SpecialCollection = KnifeCollection | GloveCollection;

export type Case = 'caseWeapon1' | 'caseWeapon2' | 'caseWeapon3' | 'caseBravo'
	| 'caseEsports2013' | 'caseEsports2013Winter' | 'caseEsports2014Summer'
	| 'caseWinterOffensive' | 'casePhoenix' | 'caseVanguard' | 'caseRevolver'
	| 'caseChroma' | 'caseChroma2' | 'caseChroma3' | 'caseGamma' | 'caseGamma2'
	| 'caseHuntsman' | 'caseBreakout' | 'caseFalchion' | 'caseShadow' | 'caseWildfire'
	| 'caseSpectrum' | 'caseSpectrum2' | 'caseRiptide' | 'caseDreamsNightmares'
	| 'caseHorizon' | 'caseDangerZone' | 'casePrisma' | 'casePrisma2'
	| 'caseCS20' | 'caseShatteredWeb' | 'caseFracture'
	| 'caseRevolution' | 'caseRecoil';
	// To add: Hydra, Clutch, Broken Fang, Snakebite
const cases: {[collName in Case]: {special: (GloveCollection | KnifeCollection)}} = {
	'caseWeapon1': {'special': 'knife1Old'},
	'caseWeapon2': {'special': 'knife1Old'},
	'caseWeapon3': {'special': 'knife1Old'},
	'caseBravo': {'special': 'knife1Old'},
	'caseEsports2013': {'special': 'knife1Old'},
	'caseEsports2013Winter': {'special': 'knife1Old'},
	'caseEsports2014Summer': {'special': 'knife1Old'},
	'caseWinterOffensive': {'special': 'knife1Old'},
	'casePhoenix': {'special': 'knife1Old'},
	'caseVanguard': {'special': 'knife1Old'},
	'caseRevolver': {'special': 'knife1Old'},
	'caseChroma': {'special': 'knife1Chroma'},
	'caseChroma2': {'special': 'knife1Chroma'},
	'caseChroma3': {'special': 'knife1Chroma'},
	'caseGamma': {'special': 'knife1Gamma'},
	'caseGamma2': {'special': 'knife1Gamma'},
	'caseHuntsman': {'special': 'knifeHuntsmanOld'},
	'caseBreakout': {'special': 'knifeButterflyOld'},
	'caseFalchion': {'special': 'knifeFalchionOld'},
	'caseShadow': {'special': 'knifeShadowsOld'},
	'caseWildfire': {'special': 'knifeBowieOld'},
	'caseSpectrum': {'special': 'knife2Chroma'},
	'caseSpectrum2': {'special': 'knife2Chroma'},
	'caseRiptide': {'special': 'knife2Gamma'},
	'caseDreamsNightmares': {'special': 'knife2Gamma'},
	'caseHorizon': {'special': 'knife3Old'},
	'caseDangerZone': {'special': 'knife3Old'},
	'casePrisma': {'special': 'knife3Chroma'},
	'casePrisma2': {'special': 'knife3Chroma'},
	'caseCS20': {'special': 'knifeClassicOld'},
	'caseShatteredWeb': {'special': 'knife4Old'},
	'caseFracture': {'special': 'knife4Old'},
	'caseRevolution': {'special': 'glove2'},
	'caseRecoil': {'special': 'glove3'},
} as const;
const caseOrder = Object.keys(cases);
export type Collection = 'assault' | 'aztec' | 'aztec' | 'dust' | 'inferno' | 'militia'
	| 'nuke' | 'office' | 'vertigo' | 'alpha' | 'dust2' | 'italy' | 'lake' | 'safehouse' | 'train'
	| 'mirage' | 'bank' | 'cache' | 'cobblestone' | 'overpass' | 'inferno2018' | 'nuke2018'
	| 'dust2_2021' | 'mirage2021' | 'train2021' | 'vertigo2021'
	| 'chopShop' | 'godsMonsters' | 'risingSun' | 'canals' | 'norse' | 'havoc'
	| 'howl';
export type ContainerCollection = Case | Collection;
const containerCollection: {[collName in ContainerCollection]: {containerName?: string, collectionName: string}} = {
	'caseWeapon1': {containerName: 'CS:GO Weapon Case', collectionName: 'Arms Deal'},
	'caseWeapon2': {containerName: 'CS:GO Weapon Case 2', collectionName: 'Arms Deal 2'},
	'caseWeapon3': {containerName: 'CS:GO Weapon Case 3', collectionName: 'Arms Deal 3'},
	'caseBravo': {containerName: 'Operation Bravo Case', collectionName: 'Bravo'},
	'caseEsports2013': {containerName: 'eSports 2013 Case', collectionName: 'eSports 2013'},
	'caseEsports2013Winter': {containerName: 'eSports 2013 Winter Case', collectionName: 'eSports 2013 Winter'},
	'caseEsports2014Summer': {containerName: 'eSports 2014 Summer Case', collectionName: 'eSports 2014 Summer'},
	'caseWinterOffensive': {containerName: 'Winter Offensive Weapon Case', collectionName: 'Winter Offensive'},
	'casePhoenix': {containerName: 'Operation Phoenix Weapon Case', collectionName: 'Phoenix'},
	'caseVanguard': {containerName: 'Operation Vanguard Weapon Case', collectionName: 'Vanguard'},
	'caseRevolver': {containerName: 'Revolver Case', collectionName: 'Revolver Case'},
	'caseChroma': {containerName: 'Chroma Case', collectionName: 'Chroma'},
	'caseChroma2': {containerName: 'Chroma 2 Case', collectionName: 'Chroma 2'},
	'caseChroma3': {containerName: 'Chroma 3 Case', collectionName: 'Chroma 3'},
	'caseGamma': {containerName: 'Gamma Case', collectionName: 'Gamma'},
	'caseGamma2': {containerName: 'Gamma 2 Case', collectionName: 'Gamma 2'},
	'caseHuntsman': {containerName: 'Hunstman Weapon Case', collectionName: 'Hunstman'},
	'caseBreakout': {containerName: 'Operation Breakout Weapon Case', collectionName: 'Breakout'},
	'caseFalchion': {containerName: 'Falchion Case', collectionName: 'Falchion'},
	'caseShadow': {containerName: 'Shadow Case', collectionName: 'Shadow'},
	'caseWildfire': {containerName: 'Operation Wildfire Case', collectionName: 'Wildfire'},
	'caseSpectrum': {containerName: 'Spectrum Case', collectionName: 'Spectrum'},
	'caseSpectrum2': {containerName: 'Spectrum 2 Case', collectionName: 'Spectrum 2'},
	'caseRiptide': {containerName: 'Operation Riptide Case', collectionName: 'Operation Riptide'},
	'caseDreamsNightmares': {containerName: 'Dreams & Nightmares Case', collectionName: 'Dreams & Nightmares'},
	'caseHorizon': {containerName: 'Horizon Case', collectionName: 'Horizon'},
	'caseDangerZone': {containerName: 'Danger Zone Case', collectionName: 'Danger Zone'},
	'casePrisma': {containerName: 'Prisma Case', collectionName: 'Prisma'},
	'casePrisma2': {containerName: 'Prisma 2 Case', collectionName: 'Prisma 2'},
	'caseCS20': {containerName: 'CS20 Case', collectionName: 'CS20'},
	'caseShatteredWeb': {containerName: 'Shattered Web Case', collectionName: 'Shattered Web'},
	'caseFracture': {containerName: 'Fracture Case', collectionName: 'Fracture'},
	'caseRevolution': {containerName: 'Revolution Case', collectionName: 'Revolution'},
	'caseRecoil': {containerName: 'Recoil Case', collectionName: 'Recoil'},
	'assault': {collectionName: 'Assault'},
	'aztec': {collectionName: 'Aztec'},
	'dust': {collectionName: 'Dust'},
	'inferno': {collectionName: 'Inferno'},
	'militia': {collectionName: 'Militia'},
	'nuke': {collectionName: 'Nuke'},
	'office': {collectionName: 'Office'},
	'vertigo': {collectionName: 'Vertigo'},
	'alpha': {collectionName: 'Alpha'},
	'dust2': {collectionName: 'Dust 2'},
	'italy': {collectionName: 'Italy'},
	'lake': {collectionName: 'Lake'},
	'safehouse': {collectionName: 'Safehouse'},
	'train': {collectionName: 'Train'},
	'mirage': {collectionName: 'Mirage'},
	'bank': {collectionName: 'Bank'},
	'cache': {collectionName: 'Cache'},
	'cobblestone': {collectionName: 'Cobblestone'},
	'overpass': {collectionName: 'Overpass'},
	'inferno2018': {collectionName: '2018 Inferno'},
	'nuke2018': {collectionName: '2018 Nuke'},
	'dust2_2021': {collectionName: '2021 Dust 2'},
	'mirage2021': {collectionName: '2021 Mirage'},
	'train2021': {collectionName: '2021 Train'},
	'vertigo2021': {collectionName: '2021 Vertigo'},
	'chopShop': {collectionName: 'Chop Shop'},
	'godsMonsters': {collectionName: 'Gods and Monsters'},
	'risingSun': {collectionName: 'Rising Sun'},
	'canals': {collectionName: 'Canals'},
	'norse': {collectionName: 'Norse'},
	'havoc': {collectionName: 'Havoc'},
	'howl': {collectionName: 'Howl'},
};
export type ItemCollection = ContainerCollection | SpecialCollection;
export function getCollectionDisplayName(collection: ContainerCollection) {
	return `The ${containerCollection[collection].collectionName} Collection`;
}
export function getCollectionContainerDisplayName(collection: ContainerCollection) {
	if (containerCollection[collection].containerName) {
		return containerCollection[collection].containerName;
	} else {
		return `${containerCollection[collection].collectionName} Collection Package`;
	}
}
