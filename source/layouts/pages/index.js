(data, Util) => {
	return {
		accentLink: {
			href: 'blank.html',
			title: 'Доставим редкий товар под заказ'
		},
		contactsInfo: {
			content: `
				<p>Вы можете забрать товар сами, заехав в наш офис. Заодно сможете проверить работоспособность покупки.</p>
				<h3>Интернет-магазин «Девайс»</h3>
				<p>
					${data.address}<br>
					<a href="tel:${data.tel.value}">${data.tel.formattedValue}</a>
				</p>
				<h3>Время работы</h3>
				<p>
					пн—пт: с 10:00 до 22:00<br>
					сб—вс: с 10:00 до 19:00
				</p>
			`,
			footLink: {
				href: 'blank.html',
				title: 'Напишите нам'
			},
			heading: 'Контакты'
		},
		deliveryInfo: {
			content: `
				<p>Огромный выбор гаджетов не оставит равнодушным гика, который есть в каждом из нас.</p>
				<p>Мы можем доставить ваш товар в самые отдалённые уголки России транспортными компаниями:</p>
				<ul>
					<li>Меловые линии</li>
					<li>СДИК</li>
					<li>ТоксБерри</li>
				</ul>
			`,
			footLink: {
				href: 'blank.html',
				title: 'Подробнее о нас'
			},
			heading: 'О нас'
		},
		heading: 'Device',
		services: {
			list: [
				{
					content: 'Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.',
					title: 'Доставка'
				},
				{
					content: '',
					title: 'Гарантия'
				},
				{
					content: '',
					title: 'Кредит'
				}
			],
			tabsList: [
				{
					title: 'Доставка'
				},
				{
					title: 'Гарантия'
				},
				{
					title: 'Кредит'
				}
			].map(Util.addBlankLink)
		},
		subscribeInfo: {
			content: 'Еженедельный дайджест с обзорами новинок, длительными тест-драйвами, распаковками, а также акции, спецпредложения и вот это вот всё.',
			form: {
				action: 'https://echo.htmlacademy.ru',
				fields: [
					{
						label: 'E-mail',
						name: 'email',
						placeholder: 'Ваш e-mail'
					}
				],
				submitText: 'Подписаться'
			},
			heading: 'Подпишитесь на рассылку',
			infoTag: 'Это бесплатно'
		},
		title: 'Главная'
	};
};
