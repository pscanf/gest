if (Meteor.isUndefined("Schema")) {
	Schema = {};
}
Schema.Item = new SimpleSchema({
	name: {
		type: String,
		denyUpdate: true
	},
	pickCode: {
		type: String,
		denyUpdate: true
	},
	card: {
		type: Schema.ItemCard,
		optional: true
	},
	page: {
		type: Schema.ItemPage,
		optional: true
	},
	stockQuantity: {
		type: Number,
		min: 0,
		optional: true
	},
	forOffer: {
		type: Boolean,
		defaultValue: false
	},
	currentlyOffering: {
		type: Boolean,
		defaultValue: false
	},
	additionalFields: {
		type: [Schema.AdditionalField],
		optional: true
	}
});
