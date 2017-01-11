import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,

    didTransition: function(info) {
        // Once everything is rendered, run Materialize initializers
        Ember.run.schedule('afterRender', this, function() {
            Ember.$('ul.tabs').tabs();
            Ember.$('.collapsible').collapsible();
            Ember.$('.modal').modal();
            Ember.$('.tooltipped').tooltip({
                delay: 50
            });
            Ember.$('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false,
                hover: true,
                gutter: 0,
                belowOrigin: false,
                alignment: 'left'
            });
        });

        // Call super
        return this._super(info);
    }
});

Router.map(function() {
  this.route('overview', { path: '/' });
  this.route('backups');
  this.route('jobs');
  this.route('config');
});



export default Router;
