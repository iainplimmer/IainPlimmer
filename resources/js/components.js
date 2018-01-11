var myMod = angular.module('ngIainPlimmer', []);

myMod.component('buttonElement', {
	bindings: {
		href : '@',
		title : '@',
		target : '@',
		colour: '@'
	},
	controller: function () {
		const self = this;
		this.$onInit=function() {
			if (self.colour === undefined || self.colour === null || self.colour === '') {
				self.colour = '#1cb841';
			}
		}
	},
	template: `
		<a href="{{$ctrl.href}}" class="abutton" target="{{$ctrl.target}}" style="background-color: {{$ctrl.colour}};">{{$ctrl.title}}</a>
	`
});

myMod.component('headerElement', {
	template: `
	  <header>
	  <div class="banner" id="headerBanner">
	  <div class="text shadow">
		  <span>iain</span><span class="plimmer">plimmer</span>
	  </div>
	  <div class="text">
		  Full stack developer for Modern Web Applications
	  </div>
	  <button-element href="./index.html" title="About me"></button-element>
	  <button-element href="./skills.html" title="My skill set"></button-element>
	  <button-element href="mailto:iainplimmer@gmail.com" target="_blank" title="Get in touch"></button-element>
	  <button-element href="https://github.com/iainplimmer" target="_blank" title="Github"></button-element>
	  <button-element href="http://www.twitter.com/iainplimmer" target="_blank" title="Twitter"></button-element>
	  <button-element href="https://www.linkedin.com/in/iainplimmer/" target="_blank" title="LinkedIn"></button-element>
	  </div>
	  </header>
	`
  });

  myMod.component('footerElement', {
	template: `
	<footer>
		<hr>
		<p>© 2017</p>
	</footer>   
	`
  });

