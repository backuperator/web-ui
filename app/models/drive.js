import DS from 'ember-data';

const { attr, belongsTo } = DS;

/**
 * Tape drive: this mirrors a iolib_drive_t structure.
 */
export default DS.Model.extend({
    name: attr('string'),
    file: attr('string'),

    library: belongsTo('library'),
});
