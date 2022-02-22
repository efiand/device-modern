(data, Util) => {
	const { action, userMenu } = data;
	const [profileLink] = userMenu.list;
	profileLink.title = 'Коля Петухов'; // На данном этапе ТЗ требует показать шапку для авторизованного пользователя на этой странице
	profileLink.extend = {
		href: 'index.html',
		title: 'Выйти'
	};

	return {
		breadcrumbs: {
			list: [
				...data.breadcrumbs.list,
				{
					href: 'catalog.html',
					title: 'Каталог товаров'
				},
				{
					title: 'Моноподы для селфи'
				}
			]
		},
		catalog: {
			action,
			filter: {
				heading: 'фильтр',
				list: [
					{
						fields: [
							{
								label: 'от',
								value: '0'
							},
							{
								label: 'до',
								value: '5000'
							}
						].map((field) => ({
							...field,
							max: '7000',
							min: '0',
							name: 'cost[]',
							step: '100',
							type: 'number'
						})),
						title: 'Стоимость'
					},
					{
						fields: [
							{
								label: 'Черный',
								value: 'black'
							},
							{
								label: 'Белый',
								value: 'white'
							},
							{
								label: 'Синий',
								value: 'blue'
							},
							{
								label: 'Красный',
								value: 'red'
							},
							{
								label: 'Розовый',
								value: 'pink'
							}
						].map((field) => ({
							...field,
							name: 'color[]',
							type: 'checkbox'
						})),
						title: 'Цвет'
					},
					{
						fields: [
							{
								label: 'Есть',
								value: '1'
							},
							{
								label: 'Нет',
								value: '0'
							}
						].map((field) => ({
							...field,
							name: 'bluetooth',
							type: 'radio'
						})),
						title: 'Bluetooth'
					}
				],
				sublitTitle: 'Показать'
			},
			list: [
				{
					heading: 'Любительская селфи-палка',
					price: '500 ₽'
				},
				{
					heading: 'Профессиональная селфи-палка',
					price: '1 500 ₽'
				},
				{
					alt: 'Корпус жёлтого цвета',
					heading: 'Непотопляемая селфи-палка',
					price: '2 500 ₽'
				},
				{
					heading: 'Селфи-палка «Следуй за мной»',
					price: '1 500 ₽'
				}
			].map((item, i) => ({
				...Util.addBlankLink(item),
				image: {
					alt: item.alt || '',
					height: '380',
					src: `images/product-${i + 1}.jpg`,
					width: '360'
				}
			})),
			sorting: {
				criteria: [
					{
						title: 'Популярные',
						value: 'popularity'
					},
					{
						title: 'Дорогие',
						value: 'cost'
					}
				],
				directions: [
					{
						title: 'По возрастанию',
						value: 'asc'
					},
					{
						title: 'По убыванию',
						value: 'desc'
					}
				],
				heading: 'сортировка',
				name: 'sorting'
			}
		},
		heading: 'Моноподы для селфи',
		moreButton: {
			name: 'limit',
			title: 'Загрузить ещё',
			value: '8'
		},
		pager: {
			list: ['1', '2', '3', '...', '15'].map((item, i) => ({
				name: 'page',
				title: item,
				value: parseInt(item, 10) || i + 1
			})),
			next: {
				name: 'page',
				title: 'Вперёд',
				value: '2'
			},
			prev: {
				name: 'page',
				title: 'Назад'
			}
		},
		title: 'Каталог'
	};
};
