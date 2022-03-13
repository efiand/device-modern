(data, Util) => {
	const { action } = data;
	const modalId = 'order';
	data.promo.js = true;

	return {
		about: {
			list: [
				{
					content: `
						<p>Огромный выбор гаджетов не оставит равнодушным<br>гика, который есть в каждом из нас.</p>
						<p>Мы можем доставить ваш товар в самые отдалённые<br>уголки России транспортными компаниями:</p>
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
				{
					content: `
						<p>Вы можете забрать товар сами, заехав в наш офис.<br>Заодно сможете проверить работоспособность покупки.</p>
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
				}
			]
		},
		accentLink: {
			href: 'blank.html',
			modalId,
			title: 'Доставим редкий товар под заказ'
		},
		categories: [
			{
				title: 'Виртуальная реальность'
			},
			{
				href: 'catalog.html',
				title: 'Моноподы<br>для cелфи'
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
		form: {
			action,
			fields: [
				{
					icon: 'user',
					label: 'Ваше имя',
					message: 'Добавьте имя',
					name: 'username',
					placeholder: 'Введите имя',
					required: true,
					type: 'text'
				},
				{
					icon: 'letter',
					label: 'Ваш e-mail',
					message: 'Забавный у вас адрес',
					name: 'email',
					placeholder: 'Введите адрес электронной почты',
					required: true,
					type: 'email',
					value: 'почта'
				},
				{
					label: 'Что нужно привезти',
					name: 'comment',
					placeholder: 'В свободной форме',
					type: 'textarea'
				},
				{
					label: 'Количество',
					max: '999',
					min: '1',
					name: 'quantity',
					required: true,
					step: '1',
					tooltip: 'Постараемся найти, сколько нужно. Привезём сколько получится по требованиям к&nbsp;провозу багажа.',
					type: 'number',
					value: '1'
				}
			],
			formId: modalId,
			stepDownText: 'Меньше',
			stepUpText: 'Больше',
			submitText: 'Отправить'
		},
		heading: 'Device',
		modal: {
			closeTitle: 'Закрыть',
			heading: 'Доставка под заказ',
			modalId
		},
		services: {
			list: [
				{
					content: '<p>Мы с удовольствием доставим ваш товар прямо к&nbsp;вашему подъезду совершенно бесплатно! Ведь<br>мы неплохо заработаем, поднимая его на ваш этаж.</p>',
					title: 'Доставка'
				},
				{
					content: '<p>Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам новый. Товар, не дом, конечно же.</p>',
					title: 'Гарантия'
				},
				{
					content: '<p>Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия кредита. Выгодные для банка, разумеется.</p>',
					title: 'Кредит'
				}
			].map(Util.addBlankLink),
			title: 'Услуги'
		},
		subscribe: {
			content: '<p>Еженедельный дайджест с обзорами новинок,<br>длительными тест-драйвами, распаковками, а также акции, спецпредложения и вот это вот всё.</p>',
			form: {
				action: data.action,
				label: 'E-mail',
				name: 'email',
				placeholder: 'Ваш e-mail',
				submitTitle: 'Подписаться'
			},
			heading: 'Подпишитесь на рассылку',
			note: 'Это бесплатно'
		},
		title: 'Главная'
	};
};
