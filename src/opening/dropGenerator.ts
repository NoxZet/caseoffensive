import ContainerItem from "database/ContainerItem";
import SkinItem from "database/SkinItem";
import { ContainerCollection, ItemCollection, SpecialCollection } from "opening/collectionRegister";
import { Quality, collections, Skin } from "opening/skinRegister";
import { Prefix, prefixChance, PrefixData } from "./prefixRegister";

// We determine item drop by assigning every item tickets
// Highest rarity gets (X/number of items of that rarity)
// Second highest gets (X*5/number of items of that rarity)
// Covert boost moves tickets from the lowest rarity skins to the highest rarity skins
type TicketArticle = {tickets: number, skin: Skin | 'specialSet', collection: ItemCollection, quality: Quality};

function getCollectionTiers(collName: ContainerCollection): number {
	let i = 0;
	let lastQuality: null | Quality = null;
	for (const skin of collections[collName]) {
		if (skin.quality !== lastQuality) {
			i++;
			lastQuality = skin.quality;
		}
	}
	return i;
}

function generateEqualTickets(collName: ItemCollection, totalTickets: number, forceQuality?: Quality):
{ articles: TicketArticle[], ticketSum: number } {
	const collection = collections[collName];
	const tickets = Math.round(totalTickets / collection.length);
	const resultArticles = [];
	for (const currentSkin of collection) {
		resultArticles.push({
			tickets: tickets,
			skin: currentSkin,
			collection: collName,
			quality: forceQuality ? forceQuality : currentSkin.quality,
		});
	}
	return { articles: resultArticles, ticketSum: tickets * collection.length};
}

/**
 * Adds articles to the articles array insitu
 * @param collName Name of the case/collection returned
 * @param covertBoost How many tickets to add to the highest two tiers - tickets are taken from the lowest tier
 * - boost <= 2: firstBoost = boost * firstTierTickets
 * - boost > 2: firstBoost = (2 + (boost - 2)/2) * firstTierTickets; secondBoost = (boost - 2)/2 * firstTierTickets
 * @param specialBoost If undefined, don't calculate tickets for covert. Else boost special with lowest tier tickets
 * @param allowedTickets Total tickets to assign to all skins from this collection (auto if undefined)
 * @return Tickets for special item
 */
function generateQualityTickets(collName: ContainerCollection, covertBoost: number = 0, specialBoost: number | undefined = 0, allowedTickets?: number, forceQuality?: Quality):
{ articles: TicketArticle[], ticketSum: number, specialTickets: number } {
	const collection = collections[collName];
	// Tickets assigned to the quality currently being processed
	let tickets = 5544000;//252000;
	let specialTickets = specialBoost !== undefined ? tickets * 2 / 5 : 0;
	let generatedTickets = 0;
	// Tickets for covert boost
	let secondBoostTickets = Math.max(0, covertBoost - 2) * tickets / 2;
	let firstBoostTickets = covertBoost * tickets - secondBoostTickets;
	let ticketSteal = firstBoostTickets + secondBoostTickets + (specialBoost || 0) * specialTickets;
	specialTickets = (1 + specialBoost) * specialTickets
	// A queue for the current quality (assigned correct ticket distribution at the end of a quality streak)
	let ticketingQueue: TicketArticle[] = [];
	let resultArticles: TicketArticle[] = [];
	let i = 0;
	const tierCount = getCollectionTiers(collName);
	let tierI = 0;
	let currentSkin = collection[0];
	let lastQuality: null | Quality = currentSkin.quality;
	while (currentSkin) {
		ticketingQueue.push({
			tickets: 0,
			skin: currentSkin,
			collection: collName,
			quality: forceQuality ? forceQuality : currentSkin.quality,
		});
		// Advance iterator
		i++; currentSkin = collection[i];
		// When quality streak changes in the next current, calculate item ticket count and flush into result
		if (!currentSkin || currentSkin.quality !== lastQuality) {
			// If maximum tiers are boosted, we "steal" tickets for them from the lowest quality
			let tierTicketCount = tickets;
			if (tierI == 0) tierTicketCount += firstBoostTickets;
			if (tierI == 1) tierTicketCount += secondBoostTickets;
			if (tierI == tierCount - 1) tierTicketCount -= ticketSteal;
			tierTicketCount = Math.max(0, Math.round(tierTicketCount / ticketingQueue.length));
			for (const article of ticketingQueue) {
				article.tickets = tierTicketCount;
				generatedTickets += article.tickets;
				resultArticles.push(article);
			}
			ticketingQueue = [];
			// Next quality is more common, so it has more tickets
			// For covert->consumer cases, reduce the step between covert and classified, purple->blue, blue->lblue and lblue->white
			// For classified->consumer cases, reduce the step between blue->lblue and lblue->white
			tickets *= (tierCount >= 6 && tierI == 0) ? 4.5 : (tierCount >= 5 && tierI >= 2) ? 4.25 : 5;
			tierI ++;
		}
		if (currentSkin) {
			lastQuality = currentSkin.quality;
		}
	}
	
	// If the number of allowed tickets is limited, scale the ticket count so the total is equal (with rounding error) to the input
	if (allowedTickets) {
		const ticketMp = allowedTickets / (generatedTickets + specialTickets);
		specialTickets = specialTickets * ticketMp;
		generatedTickets = 0;
		for (const article of resultArticles) {
			article.tickets = Math.round(article.tickets * ticketMp);
			generatedTickets += article.tickets;
		}
	}
	return { articles: resultArticles, ticketSum: generatedTickets, specialTickets: Math.round(specialTickets) }
}

export function createDropTickets(container: ContainerItem, expandSpecial: boolean):
{ ticketArticles: TicketArticle[], ticketSum: number } {
	const resultArticles: TicketArticle[] = [];
	let resultTickets = 0;
	// Tickets are either automatic or relative to the previous collection
	let allowedTickets: number | undefined = undefined;
	const containerData: { coll: ContainerCollection | undefined, special: SpecialCollection | undefined, forcedQuality: Quality | undefined }[] = [
		{ coll: container.mainCollection, special: container.mainSpecial, forcedQuality: undefined },
		{ coll: container.sideCollection, special: container.sideSpecial, forcedQuality: undefined },//'contraband' },
	];
	for (const { coll: coll, special: special, forcedQuality: forcedQuality } of containerData) {
		if (coll) {
			const { articles: articles, ticketSum: totalTickets, specialTickets: specialTickets } = generateQualityTickets(
				coll, container.covertBoost, special ? container.specialBoost : undefined, allowedTickets, forcedQuality
			);
			resultArticles.push(...articles);
			resultTickets += totalTickets;
			if (special) {
				if (expandSpecial) {
					const { articles: specialArticles, ticketSum: createdSpecialTickets } = generateEqualTickets(
						special, specialTickets, forcedQuality
					);
					resultArticles.push(...specialArticles);
					resultTickets += createdSpecialTickets;
				}
				// If we're displaying item odds, we don't want to spew out all individual knives
				else {
					resultArticles.push({
						tickets: specialTickets,
						skin: 'specialSet',
						collection: special,
						quality: forcedQuality ? forcedQuality : 'covert',
					});
					resultTickets += specialTickets;
				}
			}
			const sideChance = Math.min(0.99, Math.max(0.01, container.sideChance));
			allowedTickets = resultTickets * container.sideChance / (1 - container.sideChance);
		}
	}
	return { ticketArticles: resultArticles, ticketSum: resultTickets };
}

function chooseArticle(ticketArticles: TicketArticle[], ticketSum: number): TicketArticle {
	const ticket = Math.floor(Math.random() * ticketSum);
	let cum = 0;
	for (const article of ticketArticles) {
		cum += article.tickets;
		if (ticket <= cum) {
			return article;
		}
	}
	throw new Error('Cumulative sum was lower than randomly generated ticket for '
		+ ticketArticles[0].collection + ' - ' + ticketArticles[ticketArticles.length - 1].collection);
}

function getSingleRandomPrefix(key: Prefix, prefixData: PrefixData): Prefix | null {
	if (prefixData === false) {
		return null;
	} else if (prefixData === true) {
		return key;
	} else if (typeof prefixData === 'number') {
		return Math.random() * prefixData < 1 ? key : null;
	} else {
		const ticket = Math.floor(Math.random() * prefixData.ticketSum);
		// Cumulate ticket counts until we find cumulative count under which ticket fits
		let cum = 0;
		for (const { tickets: tickets, prefix: prefix } of prefixData.outcomes) {
			cum += tickets;
			if (ticket < cum) {
				return prefix;
			}
		}
		throw new Error('Cumulative sum was lower than ticket for prefix ' + key);
	}
}

function getRandomPrefix(container: ContainerItem): Prefix[] {
	const prefixes: Prefix[] = [];
	for (const prefixName of container.prefix) {
		const prefix = getSingleRandomPrefix(prefixName, prefixChance[prefixName]);
		if (prefix) {
			prefixes.push(prefix);
		}
	}
	return prefixes;
}

export function getDrops(container: ContainerItem, count: number): SkinItem[] {
	const { ticketArticles: ticketArticles, ticketSum: ticketSum } = createDropTickets(container, true);
	const results = [];
	for (let i = 0; i < count; i++) {
		const article = chooseArticle(ticketArticles, ticketSum);
		const skin = article.skin;
		if (skin === 'specialSet') {
			throw new Error('Generated a skin with specialSet for getDrops');
		} else {
			const wear = ('wearMin' in skin)
				? Math.random() * (skin.wearMax - skin.wearMin) + skin.wearMin
				: null;
			results.push(new SkinItem(skin.weapon, skin.skin, article.quality, wear, container.level, getRandomPrefix(container)));
		}
	}
	return results;
}
