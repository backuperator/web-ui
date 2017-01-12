import DS from 'ember-data';

const { attr, hasMany } = DS;

/**
 * Tape libraries are collections of drives and loaders, usually contained in
 * the same unit. This mirrors a iolib_library_t structure.
 */
var Library = DS.Model.extend({
	name: attr('string'),

	drives: hasMany('drive', { async: false }),
	loaders: hasMany('loader', { async: false }),
});

export default Library;
