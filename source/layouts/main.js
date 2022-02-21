(_data, Util) => {
	Util.addBlankLinks = (item) => ({
		...item,
		href: 'blank.html'
	});

	const phoneNumber = '+7 (812) 812-12-12';

	return {
		address: 'Санкт-Петербург, набережная реки Карповки, 5, литера П.',
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
					].map(Util.addBlankLinks),
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
			].map(Util.addBlankLinks)
		},
		projectName: 'Device',
		searchForm: {
			action: 'https://echo.htmlacademy.ru',
			fields: [
				{
					label: 'Поиск',
					name: 'search',
					placeholder: 'Текст поиска'
				}
			],
			submitText: 'Найти'
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
			].map(Util.addBlankLinks)
		}
	};
};
