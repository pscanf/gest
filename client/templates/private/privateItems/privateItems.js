Template.privateItems.helpers({
	items: function () {
		return Items.find();
	},
	settings: function () {
		var settings = {};
		settings.fields = [
			{
				key: "name",
				label: "Nome articolo"
			},
			{
				key: "pickCode",
				label: "Codice Pick"
			},
			{
				key: "stockQuantity",
				label: "Giacenza"
			},
			{
				key: "forOffer",
				label: "Pubblico",
				fn: function (value) {
					if (value) {
						return new Handlebars.SafeString("<i class=\"fa fa-check\"></i>"); 
					}
				}
			},
			{
				key: "currentlyOffering",
				label: "Offerto",
				fn: function (value) {
					if (value) {
						return new Handlebars.SafeString("<i class=\"fa fa-check\"></i>"); 
					}
				}
			}
		];
		settings.group = "items";
		settings.showNavigation = "never";
		settings.useFontAwesome = true;
		return settings;
	}
});

Template.privateItems.events({
	"click .reactive-table tr": function (e) {
		if (this._id) {
			Router.go("privateItem", {_id: this._id});
		}
	}
});
