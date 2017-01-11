import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Overview",

	model: function() {
		return this.store.findAll('library');
	},

	renderTemplate: function() {
		// Render default outlet
		this.render();
		// render nav tabs
		this.render("overview-nav", {
			outlet: "nav",
			into: "application"
		});
	}
});
