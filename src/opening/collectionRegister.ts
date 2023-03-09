export type KnifeCollection = 'knife1Old' | 'knife1Chroma' | 'knife1Gamma'
	| 'knifeHuntsmanOld' | 'knifeButterflyOld' | 'knifeFalchionOld' | 'knifeShadowsOld' | 'knifeBowieOld'
	| 'knife2Chroma' | 'knife2Gamma'
	| 'knife3Old' | 'knife3Chroma'
	| 'knifeClassicOld' | 'knife4Old'
export type GloveCollection = 'glove2' | 'glove3';
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
