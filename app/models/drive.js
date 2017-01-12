import DS from 'ember-data';

const { attr, belongsTo } = DS;

/**
 * Tape drive: this mirrors a iolib_drive_t structure.
 */
var Drive = DS.Model.extend({
    name: attr('string'),
    file: attr('string'),

    library: belongsTo('library', { async: true }),
});

export default Drive;
