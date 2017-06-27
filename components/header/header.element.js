(function (customElements) {
	class HeaderElement extends Polymer.Element {                        
		static get is() { 
			return 'header-element'; 
		}
	}
	customElements.define(HeaderElement.is, HeaderElement);
})(customElements);        