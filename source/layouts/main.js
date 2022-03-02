(data, Util) => {
	Util.addBlankLink = (item) => ({
		...item,
		href: !item.href && item.href !== null ? 'blank.html' : item.href
	});

	const phoneNumber = '+7 (812) 812-12-12';
	const action = 'https://echo.htmlacademy.ru';

	return {
		action,
		address: 'Санкт-Петербург, набережная реки Карповки, 5, литера П.',
		breadcrumbs: {
			list: [
				{
					href: 'index.html',
					title: 'Главная'
				}
			]
		},
		catalogMenu: {
			list: [
				{
					title: 'Виртуальная реальность'
				},
				{
					title: 'Фитнес-браслеты'
				},
				{
					title: 'Квадрокоптеры'
				},
				{
					current: data.page === 'catalog',
					href: 'catalog.html',
					title: 'Моноподы для cелфи'
				},
				{
					title: 'Умные часы'
				},
				{
					title: 'Экшн-камеры'
				}
			].map(Util.addBlankLink),
			title: 'Каталог товаров'
		},
		developer: {
			href: 'https://htmlacademy.ru/',
			logo: {
				alt: 'Логотип HTML Academy',
				height: '34',
				src: 'images/logo-htmlacademy.svg',
				width: '115'
			}
		},
		heading: 'Страница в разработке!',
		lang: 'ru',
		logo: {
			alt: 'Логотип Device',
			height: '36',
			href: 'index.html',
			src: 'images/logo-device.svg',
			width: '145'
		},
		mainMenu: {
			list: [
				{
					current: data.page === 'blank',
					title: 'Доставка'
				},
				{
					title: 'Гарантия'
				},
				{
					title: 'Контакты'
				}
			].map(Util.addBlankLink)
		},
		projectName: 'Device',
		searchForm: {
			action,
			label: 'Поиск',
			name: 'search',
			placeholder: 'Поиск по сайту',
			submitTitle: 'Найти',
			value: 'Текст поиска'
		},
		social: {
			list: [
				{
					href: 'https://www.facebook.com/htmlacademy',
					id: 'facebook',
					title: 'Facebook'
				},
				{
					href: 'https://www.instagram.com/htmlacademy/',
					id: 'instagram',
					title: 'Instagram'
				},
				{
					href: 'https://twitter.com/htmlacademy_ru',
					id: 'twitter',
					title: 'Twitter'
				}
			]
		},
		tel: {
			formattedValue: phoneNumber,
			shortTitle: 'Тел.',
			value: Util.numberize(phoneNumber)
		},
		title: 'Страница в разработке',
		userMenu: {
			list: [
				{
					alias: 'user',
					href: 'catalog.html',
					title: 'Войти'
				},
				{
					alias: 'sort',
					title: 'Сравнить'
				},
				{
					alias: 'cart',
					hiddenText: 'Товаров в корзине:',
					href: null,
					label: '2',
					popover: {
						list: [
							{
								title: 'Любительская<br>селфи-палка'
							},
							{
								title: 'Профессиональная<br>селфи-палка'
							}
						].map((item, i) => ({
							...item,
							href: 'cart.html',
							hrefToRemove: 'blank.html',
							image: {
								height: 43,
								src: `images/product-${i + 1}-small.jpg`,
								src2x: item.has2x ? `images/product-${i + 1}-small@2x.jpg` : null,
								width: 39
							}
						})),
						openLink: {
							href: 'cart.html',
							title: 'Открыть корзину'
						},
						params: [
							{
								key: 'Товаров',
								value: 2
							},
							{
								key: 'Сумма',
								value: '2000 ₽'
							}
						],
						titleToRemove: 'Удалить из корзины'
					},
					title: 'Корзина'
				}
			].map(Util.addBlankLink)
		}
	};
};
