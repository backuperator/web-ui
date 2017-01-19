import DS from 'ember-data';

const { attr, belongsTo } = DS;

/**
 * A single storage element in an autoloader. For simplicity, the web UI only
 * ever receives storage elements (slots) and portals (mailslots); drives are
 * implied by the Drive object, and we don't care about pickers.
 */
var LoaderElement = DS.Model.extend({
    // Logical address in the loader
    address: attr('number'),

    kind: attr('enum', {
        options: [
            'storage',
            'portal',
            'drive',
            'transport'
        ],
        defaultValue: 'storage'
    }),

    // Set when there is nothing in the slot
    isEmpty: attr('boolean'),
    // Volume label
    label: attr('string'),

    // Loader in which this element exists
    loader: belongsTo('loader', { async: true }),
});

LoaderElement.reopenClass({
    FIXTURES: [

    ]
});

export default LoaderElement;
