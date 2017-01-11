import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Configuration",

	renderTemplate: function() {
		// Render default outlet
		this.render();
		// render nav tabs
		this.render("config-nav", {
			outlet: "nav",
			into: "application"
		});
	}
});
