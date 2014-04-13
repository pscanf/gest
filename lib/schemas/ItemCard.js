(function () {
	if (Meteor.isUndefined("Schema")) {
		Schema = {};
	}
	Schema.ItemCard = new SimpleSchema({
		title: {
			type: String,
			optional: true
		},
		description: {
			type: String,
			optional: true
		},
		imgSrc: {
			type: String,
			optional: true
		},
		imgShape: {
			type: String,
			optional: true
		},
		imgAlt: {
			type: String,
			optional: true
		},
		bodyBgColor: {
			type: String,
			optional: true
		},
		bodyFgColor: {
			type: String,
			optional: true
		},
		headingBgColor: {
			type: String,
			optional: true
		},
		headingFgColor: {
			type: String,
			optional: true
		},
		buttonBgColor: {
			type: String,
			optional: true
		},
		buttonFgColor: {
			type: String,
			optional: true
		},
		buttonBdColor: {
			type: String,
			optional: true
		}
	});
})();
