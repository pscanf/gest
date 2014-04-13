// Defines the Items collection
Items = new Meteor.Collection("items", {
	schema: Schema.Item
});
Items.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	},
	remove: function () {
		return true;
	}
});
