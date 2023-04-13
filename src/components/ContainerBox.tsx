import { ContainerCollection, getCollectionDisplayName, specialCollections } from 'opening/collectionRegister';
import React from 'react'
import ContainerResource, { getContainerDisplayName } from 'resource/Container';

export default function ContainerBox({container: containerResource, hover, onOpen: onOpen} : {container: ContainerResource, hover?: boolean, onOpen?: () => void}) {
	const imageLayers: JSX.Element[] = [];
	// Get skin base image - need data from skin register
	const baseSrc = '/data/containers/' + (containerResource.baseSprite || containerResource.mainCollection) + '.png';
	imageLayers.push(<img className='layer-base' key='base' src={baseSrc}/>);
	if (containerResource.baseSprite) {
		const mainSrc = '/data/collections/' + containerResource.mainCollection + '_generic.png'
		imageLayers.push(<img className='layer-main-collection' key='main-collection' src={mainSrc}/>)
	}

	const containerName = getContainerDisplayName(containerResource);
	return <div className={`item-box container-box`}>
		<div className='image-layers'>
			{imageLayers}
		</div>
		<div className='item-name'>
			{containerName}
		</div>
		{hover
			? <div className='item-hover'>
			</div>
			: null
		}
		{onOpen
			? <div><a onClick={onOpen} href='#'>Open</a></div>
			: null
		}
	</div>;
}
