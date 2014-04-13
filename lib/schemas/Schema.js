if (Meteor.isUndefined("Schema")) {
	Schema = {};
}

Schema.Order = new SimpleSchema({
	user: {
		type: String
	}
});

Schema.Payment = new SimpleSchema({
	user: {
		type: String
	}
});

Schema.Person = new SimpleSchema({
	user: {
		type: String
	}
});
