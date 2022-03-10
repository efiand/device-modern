import noUiSlider from 'nouislider';

export default class Range {
	constructor(el) {
		this._el = el;
		this._slider = this._el.querySelector('.range__target');
		this._fromField = this._el.querySelector('.range__group:first-of-type input');
		this._toField = this._el.querySelector('.range__group:last-of-type input');

		this._init();
		this._setListeners();
	}

	get _params() {
		const { fromLabel, max, min, step, toLabel } = this._el.dataset;

		return {
			fromLabel,
			max: parseInt(max, 10),
			min: parseInt(min, 10),
			step: parseInt(step, 10),
			toLabel
		};
	}

	reset() {
		const { max, min } = this._params;
		this._slider.noUiSlider.set([min, max]);
	}

	_init() {
		const { max, min, step } = this._params;

		noUiSlider.create(this._slider, {
			connect: true,
			cssPrefix: 'range__',
			handleAttributes: [
				{
					'aria-label': this._params.fromLabel
				},
				{
					'aria-label': this._params.toLabel
				}
			],
			range: {
				max,
				min
			},
			start: [
				this._fromField.value || min,
				this._toField.value || max
			],
			step
		});
	}

	_setListeners() {
		this._handleUpdate = this._handleUpdate.bind(this);
		this._handleChange = this._handleChange.bind(this);

		this._slider.noUiSlider.on('update', this._handleUpdate);
		this._fromField.addEventListener('change', this._handleChange);
		this._toField.addEventListener('change', this._handleChange);
	}

	_handleUpdate([startValue, endValue]) {
		this._fromField.value = parseInt(startValue, 10);
		this._toField.value = parseInt(endValue, 10);
	}

	_handleChange() {
		this._slider.noUiSlider.set([this._fromField.value, this._toField.value]);
	}
}
