import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Backups",

	renderTemplate: function() {
		// Render default outlet
		this.render();
		// render nav tabs
		this.render("backups-nav", {
			outlet: "nav",
			into: "application"
		});
	}
});
