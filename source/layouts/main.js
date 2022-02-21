(_data, Util) => {
	Util.addBlankLink = (item) => ({
		...item,
		href: 'blank.html'
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
		developer: {
			href: 'https://htmlacademy.ru/',
			title: 'Разработано в HTML Academy'
		},
		heading: 'Страница в разработке!',
		lang: 'ru',
		mainMenu: {
			list: [
				{
					list: [
						{
							title: 'Виртуальная реальность'
						},
						{
							title: 'Моноподы для cелфи'
						},
						{
							title: 'Экшн-камеры'
						},
						{
							title: 'Фитнес-браслеты'
						},
						{
							title: 'Умные часы'
						},
						{
							title: 'Квадрокоптеры'
						}
					].map(Util.addBlankLink),
					title: 'Каталог товаров'
				},
				{
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
			fields: [
				{
					label: 'Поиск',
					name: 'search',
					placeholder: 'Текст поиска'
				}
			],
			submitText: 'Найти'
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
					title: 'Войти'
				},
				{
					title: 'Сравнить'
				},
				{
					label: '2',
					title: 'Корзина'
				}
			].map(Util.addBlankLink)
		}
	};
};
