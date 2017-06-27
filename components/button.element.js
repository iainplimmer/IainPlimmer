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
					value: 'href property required....',                            
				},
				target: {
					type: String,
					value: '_self',                            
				}
			};
		}

	}
	customElements.define(ButtonElement.is, ButtonElement);
})(customElements);