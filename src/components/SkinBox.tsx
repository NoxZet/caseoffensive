import { ContainerCollection, getCollectionDisplayName, specialCollections } from 'opening/collectionRegister';
import { getQualityDisplayName, getSkinData } from 'opening/skinRegister';
import React from 'react'
import SkinResource, { getExteriorDisplayName, getSkinDisplayName } from 'resource/Skin';

export default function SkinBox({skin: skinResource, hover} : {skin: SkinResource, hover?: boolean}) {
	const imageLayers: JSX.Element[] = [];
	// Get skin base image - need data from skin register
	const [skinData, collectionName] = getSkinData(skinResource.weapon, skinResource.skin);
	imageLayers.push(<img className='layer-base' key='base' src={skinData.imgSrc}/>);

	const [weaponName, skinName] = getSkinDisplayName(skinResource);
	return <div className={`item-box skin-box skin-quality-${skinData.quality}`}>
		<div className='image-layers'>
			{imageLayers}
		</div>
		<div className='item-name'>
			{weaponName}<br/>{skinName}
		</div>
		{hover
			? <div className='item-hover'>
				<div className='item-name'>{weaponName} | {skinName}</div>
				<table>
					<tbody>
						<tr>
							<td>Rarity</td>
							<td className='quality'>{getQualityDisplayName(skinResource.quality)}</td>
						</tr>
						{'wearMin' in skinData ? <>
							<tr>
								<td>Exterior</td>
								<td>{getExteriorDisplayName(skinResource)}</td>
							</tr>
							<tr>
								<td>Float value</td>
								<td>{skinResource.wear}</td>
							</tr>
						</> : null}
					</tbody>
				</table>
				{!specialCollections.includes(collectionName as any)
					? <div className='collection-name'>
						{getCollectionDisplayName(collectionName as ContainerCollection)}
					</div>
					: null
				}
			</div>
			: null
		}
	</div>;
}
