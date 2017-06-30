(function (window) {
    window.onload = function () {

        //  We're puposefully using var and classic ES5 functions here to manage older browsers.
        //  Then, for each unsupported item, place it in an array to display to the user.
        var unsupportedItems = [];
        
        //  Returns if the browser doesnt support CUSTOM ELEMENTS  
        if (!('customElements' in window)) {        
            unsupportedItems.push('Custom Elements');
        }
        
        //  Returns if the browser doesnt support HTML IMPORTS
        if (!('import' in document.createElement('link'))) {
            unsupportedItems.push('HTML Imports');
        }
        
        //  Returns if the browser doesnt support SHADOW DOM 
        if (!(document.head.createShadowRoot || document.head.attachShadow)) {
            unsupportedItems.push('Shadow DOM');
        }
        
        //  If we have unsupported items, write them to the warning div
        if (unsupportedItems.length !== 0) {

            unsupportedItems.unshift('Unsupported browser detected! You have the following features missing');
            unsupportedItems.push('you might want to consider updating your browser to be able to use this website.');

            var webComponentWarningDiv = document.createElement('p');
            webComponentWarningDiv.className = 'warning';

            webComponentWarningDiv.innerHTML = webComponentWarningDiv.innerHTML + unsupportedItems.join(', ');
            var mainTag = document.getElementsByTagName('main')[0];
            mainTag.appendChild(webComponentWarningDiv, mainTag.firstChild);
            
        }    
        
    };
})(window);




