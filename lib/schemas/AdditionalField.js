(function () {
	if (Meteor.isUndefined("Schema")) {
		Schema = {};
	}
	Schema.AdditionalField = new SimpleSchema({
		key: {
			type: String
		},
		value: {
			type: String
		}
	});
})();
