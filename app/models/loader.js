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
});

export default Loader;
