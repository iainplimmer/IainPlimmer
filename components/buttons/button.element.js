(function (customElements) {
	class ButtonElement extends Polymer.Element {

		static get is() {
			return 'button-element';
		}

		constructor() {
			super();
		}

		static get properties() {
			return {
				title: {
					type: String,
					value: 'title property required....',
				},
				href: {
					type: String,
					value: '#',                            
				},
				target: {
					type: String,
					value: '_self',                            
				},
				colour: {
					type: String,
					value: 'rgb(28, 184, 65);',                            
				}
			};
		}

	}
	customElements.define(ButtonElement.is, ButtonElement);
})(customElements);