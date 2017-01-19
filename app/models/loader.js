import Ember from 'ember';
import DS from 'ember-data';

const { attr, hasMany, belongsTo } = DS;

/**
 * Autoloader: this mirrors an iolib_loader_t structure.
 */
var Loader = DS.Model.extend({
    name: attr('string'),
    file: attr('string'),

    elements: hasMany('element', { async: true }),
    library: belongsTo('library', { async: true }),


    // Returns all storage elements
    storageElements: Ember.computed('elements.@each.kind', function() {
        var elements = this.get('elements');

        // get storage and portals
        var storage = elements.filterBy('kind.value', 'storage');
        var portal = elements.filterBy('kind.value', 'portal');

        return storage.concat(portal);
    }),
    // Returns all other elements
    otherElements: Ember.computed('elements.@each.kind', function() {
        var elements = this.get('elements');

        // get storage and portals
        var storage = elements.filterBy('kind.value', 'drive');
        var portal = elements.filterBy('kind.value', 'transport');

        return storage.concat(portal);
    }),
});

export default Loader;
