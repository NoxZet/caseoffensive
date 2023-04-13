import React, { useEffect, useState } from 'react'
import { AxiosInstance } from 'axios';

import ContainerResource from 'resource/Container';
import SkinResource, { TicketSkin } from 'resource/Skin';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';
import SkinBox from './SkinBox';
import ContainerBox from './ContainerBox';

export default function OpeningPage({axiosInstance, container: containerResource, onClose} : {axiosInstance: AxiosInstance, container: ContainerResource & HasId, onClose: () => void}) {
	const STATE_OVERVIEW = 0;
	const STATE_OPENING = 1;
	const STATE_RESULT = 2;
	const [openingState, setOpeningState] = useState<typeof STATE_OVERVIEW | typeof STATE_OPENING | typeof STATE_RESULT>(STATE_OVERVIEW);
	const [possibleDrops, setPossibleDrops] = useState<'loading' | TicketSkin[]>('loading');

	useEffect(() => {
		axiosInstance.get(`/inventory/container/${containerResource.id}/drops`)
		.then(response => {console.log(response.data); setPossibleDrops(response.data)});
	}, []);

	function openCase() {

	}

	const classes = 'app-screen opening-screen';
	if (openingState === STATE_OVERVIEW) {
		let renderDrops;
		if (possibleDrops === 'loading') {
			renderDrops = <div>Loading...</div>;
		} else {
			// We group items of the same chance together
			const chanceGroups = [];
			let currentGroup = [];
			for (let i = 0; i < possibleDrops.length; i++) {
				currentGroup.push(possibleDrops[i]);
				// After a chance group ends (ie. last item or next item has different chance)
				if (i + 1 >= possibleDrops.length || possibleDrops[i].chance !== possibleDrops[i + 1].chance) {
					// Render whole group here
					chanceGroups.push(
					<div className='chance-group'>
						<h2>{Math.round(possibleDrops[i].chance * 1000000) / 10000}%</h2>
						<div className='drop-list'>
							{currentGroup.map(ticketItem => 'special' in ticketItem.item
								? <div>Rare special item</div>
								: <SkinBox skin={ticketItem.item}/>)}
						</div>
					</div>
					);
					currentGroup = [];
				}
			}
			renderDrops = chanceGroups;
		}

		return <div className={classes}>
			<div className='container-bar'>
				<ContainerBox container={containerResource}/>
				<div>
					<a onClick={onClose} href='#'>Close</a> | <a onClick={openCase} href='#'>Open case</a>
				</div>
			</div>
			<div className='possible-drops-bar'>
				{renderDrops}
			</div>
		</div>
	}
	return null;
}
