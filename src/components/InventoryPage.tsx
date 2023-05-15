import React, { useEffect, useState } from 'react'
import { AxiosInstanceAuthError } from 'common/makeAxiosAuthError';

import ContainerResource from 'resource/Container';
import SkinResource from 'resource/Skin';
import HasId from 'resource/HasId';
import { getCollectionContainerDisplayName } from 'opening/collectionRegister';
import SkinBox from './SkinBox';
import ContainerBox from './ContainerBox';
import OpeningPage from './OpeningPage';

// Named in camel case in case because it might become a dynamic variable
const pageLength = 20;

export default function InventoryPage({axiosInstance, type: inventoryType} : {axiosInstance: AxiosInstanceAuthError, type: 'container' | 'skin'}) {
	const [items, setItems] = useState<((SkinResource | ContainerResource) & HasId)[]>([]);
	const [itemCount, setItemCount] = useState(0);
	const [page, setPage] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [opening, setOpening] = useState<(ContainerResource & HasId) | null>(null);

	function reloadPage() {
		setLoading(true);
		axiosInstance.get(`/inventory/${inventoryType}?page=${page}`)
		.then(inventory => {
			setItems(inventory.data);
			setItemCount(inventory.headers.count || 0);
		})
		.catch((error) => axiosInstance.authErrorCheck(error))
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

	const pageCount = Math.max(1, Math.ceil(itemCount / 20));
	// List of page links to render - in the format of [0 ... 5 6 7 8 9 ... 19] if we're on page 7
	const pager: (number|string)[] = [0];
	// 0 <...> 2 3 4 5 (current page = 5)
	if (page >= 5) {
		pager.push('firstSpacer');
	}
	for (let i = page - 3; i <= page + 3 && i < pageCount; i++) {
		if (i >= 1) {
			pager.push(i);
		}
	}
	// 4 5 6 <...> 8 (page count = 9)
	const lastPage = pager[pager.length - 1];
	if (typeof lastPage === 'number' && lastPage <= pageCount - 3) {
		pager.push('secondSpacer');
	}
	// 3 4 5 <6>
	if (lastPage !== pageCount - 1) {
		pager.push(pageCount - 1);
	}

	return <>
		<div className='app-screen inventory-screen' style={opening ? {display: 'none'} : {}}>
			<div className='item-list'>
				{items.map(item => {
					return <div key={item.id}>
						{'skin' in item
							? <SkinBox skin={item} hover={true}/>
							: <ContainerBox container={item} hover={true} onOpen={() => setOpening(item)}/>
						}
					</div>
				})}
			</div>
			<div className='page-bar'>{pager.map(page => {
				return typeof page === 'string'
					? <a key={page}>...</a>
					: <a key={page} onClick={() => setPage(page)} href="#">{page + 1}</a>
			})}</div>
			{displayLoader()}
		</div>
		{opening
			? <OpeningPage axiosInstance={axiosInstance} container={opening} onClose={openingClose}/>
			: null
		}
	</>;
}
