import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	modelNameFromPayloadKey: function(payloadKey) {
		if(payloadKey === 'drives') {
			return 'drive';
		} else {
			return this._super(payloadKey);
		}
	}
});
