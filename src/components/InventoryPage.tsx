import React, { useEffect, useState } from 'react'
import { AxiosInstance } from 'axios';

import ContainerResource from 'resource/Container';
import SkinResource from 'resource/Skin';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';
import SkinBox from './SkinBox';
import ContainerBox from './ContainerBox';
import OpeningPage from './OpeningPage';

export default function InventoryPage({axiosInstance, type: inventoryType} : {axiosInstance: AxiosInstance, type: 'container' | 'skin'}) {
	const [items, setItems] = useState<((SkinResource | ContainerResource) & HasId)[]>([]);
	const [page, setPage] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [opening, setOpening] = useState<(ContainerResource & HasId) | null>(null);

	function reloadPage() {
		setLoading(true);
		axiosInstance.get(`/inventory/${inventoryType}?page=${page}`)
		.then(inventory => setItems(inventory.data))
		.finally(() => setLoading(false));
	}

	useEffect(() => {
		reloadPage();
	}, [page]);

	function displayLoader() {
		if (loading) {
			return <div className="loader">loader</div>
		} else {
			return null;
		}
	}

	function openingClose() {
		setOpening(null);
		reloadPage();
	}

	return <>
		<div className='app-screen inventory-screen'>
			<div className='item-list' style={opening ? {display: 'none'} : {}}>
				{items.map(item => {
					return <div key={item.id}>
						{'skin' in item
							? <SkinBox skin={item} hover={true}/>
							: <ContainerBox container={item} hover={true} onOpen={() => setOpening(item)}/>
						}
					</div>
				})}
			</div>
			<div className='page-bar'>{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(page => {
				return <a key={page} onClick={() => setPage(page)} href="#">{page + 1}</a>;
			})}</div>
			{displayLoader()}
		</div>
		{opening
			? <OpeningPage axiosInstance={axiosInstance} container={opening} onClose={openingClose}/>
			: null
		}
	</>;
}
