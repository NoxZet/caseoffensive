import React, { useEffect, useState } from 'react'
import { AxiosInstanceAuthError } from 'common/makeAxiosAuthError';

import ContainerResource, { getContainerDisplayName } from 'resource/Container';
import SkinResource, { TicketSkin } from 'resource/Skin';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';
import SkinBox from './SkinBox';
import ContainerBox from './ContainerBox';

export default function OpeningPage({axiosInstance, container: containerResource, onClose} : {axiosInstance: AxiosInstanceAuthError, container: ContainerResource & HasId, onClose: () => void}) {
	const STATE_OVERVIEW = 0;
	const STATE_OPENING = 1;
	const STATE_RESULT = 2;
	const [openingState, setOpeningState] = useState<typeof STATE_OVERVIEW | typeof STATE_OPENING | typeof STATE_RESULT>(STATE_OVERVIEW);
	const [possibleDrops, setPossibleDrops] = useState<'loading' | TicketSkin[]>('loading');
	const [actualDrops, setActualDrops] = useState<'loading' | {final: SkinResource, alternative: SkinResource[]}>('loading');
	const [randomOffset, setRandomOffset] = useState<number>(-Math.floor(0)); // 0 to -338
	const [animationFinishedTimeout, setAnimationFinishedTimeout] = useState<NodeJS.Timeout | undefined>(undefined);

	useEffect(() => {
		axiosInstance.get(`/inventory/container/${containerResource.id}/drops`)
		.then(response => {setPossibleDrops(response.data)})
		.catch((error) => axiosInstance.authErrorCheck(error));
		return () => {
			// Clear animation finish timeout so we don't set state on removed component
			if (animationFinishedTimeout !== undefined) {
				clearTimeout(animationFinishedTimeout);
			}
		}
	}, []);

	function skipAnimation() {
		if (animationFinishedTimeout !== undefined) {
			clearTimeout(animationFinishedTimeout);
		}
		setOpeningState(STATE_RESULT);
	}

	function openCase() {
		if (openingState === STATE_OVERVIEW) {
			// Open the case on the server, set to animation state
			setOpeningState(STATE_OPENING);
			setRandomOffset(-Math.floor(Math.random() * 339)); // 0 to -338
			axiosInstance.post(`/inventory/container/${containerResource.id}/open`)
			.then(response => {
				setActualDrops(response.data)
				setAnimationFinishedTimeout(setTimeout(() => {
					setOpeningState(STATE_RESULT);
				}, 8100));
			})
			.catch((error) => axiosInstance.authErrorCheck(error));
		}
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

		return <div className={classes + ' possible-drops-screen'}>
			<div className='container-bar'>
				<ContainerBox container={containerResource}/>
				<div>
					<a onClick={onClose} href='#'>Close</a> | <a onClick={openCase} href='#'>Open case</a>
				</div>
			</div>
			<div className='possible-drops-bar'>
				{renderDrops}
			</div>
		</div>;
	}
	else if (openingState === STATE_OPENING) {
		if (actualDrops === 'loading') {
			return <div className={classes}><div>Loading...</div></div>;
		} else {
			return <div className={classes + ' opening-animation-screen'}>
				<h2>Opening {getContainerDisplayName(containerResource)}...</h2>
				<div className='opening-animation-frame-wrapper'>
					<div className='opening-animation-frame'>
						<div className='sliding-items' style={{marginLeft: `${randomOffset}px`}}>{
							[...actualDrops.alternative.slice(0, 35), actualDrops.final, ...actualDrops.alternative.slice(35)].map(drop => {
								return <SkinBox skin={drop}/>;
							})
						}</div>
						<div className='sliding-item-overlay-border'></div>
						<div className='sliding-item-central-line'></div>
					</div>
				</div>
				<div className='opening-bottom-bar'><a onClick={skipAnimation} href='#'>Skip animation</a></div>
			</div>;
		}
	}
	else { //if (openingState === STATE_RESULT) {
		return <div className={classes + ' possible-drops-screen'}>
			{actualDrops !== 'loading'
				? <SkinBox skin={actualDrops.final}/>
				: <div></div>
			}
			<div className='opening-bottom-bar'><a onClick={onClose} href='#'>Close</a></div>
		</div>;
	}
}
