Router.configure({
	loadingTemplate: "loading",
	waitOn: function () {
		return [
			Meteor.subscribe("items"),
			Meteor.subscribe("orders"),
			Meteor.subscribe("persons")
		];
	}
});

Router.map(function () {
	// Public routes
	this.route("publicHome", {
		path: "/",
		template: "publicHome",
		layoutTemplate: "publicLayout"
	});
	this.route("publicItems", {
		path: "/articoli",
		template: "publicItems",
		layoutTemplate: "publicLayout"
	});
	this.route("publicOrders", {
		path: "/ordini",
		template: "publicOrders",
		layoutTemplate: "publicLayout"
	});
	this.route("publicPayments", {
		path: "/pagamenti",
		template: "publicPayments",
		layoutTemplate: "publicLayout"
	});
	this.route("publicProfile", {
		path: "/profilo",
		template: "publicProfile",
		layoutTemplate: "publicLayout"
	});
	// Private routes
	this.route("privateHome", {
		path: "/admin",
		template: "privateHome",
		layoutTemplate: "privateLayout"
	});

	this.route("privateItems", {
		path: "/admin/articoli",
		template: "privateItems",
		layoutTemplate: "privateLayout"
	});
	this.route("privateItem", {
		path: "/admin/articolo/:_id",
		template: "privateItem",
		layoutTemplate: "privateLayout",
		data: function () {
			return Items.findOne(this.params._id);
		}
	});

	this.route("privatePersons", {
		path: "/admin/donatori",
		template: "privatePersons",
		layoutTemplate: "privateLayout"
	});
	this.route("privateOrders", {
		path: "/admin/ordini",
		template: "privateOrders",
		layoutTemplate: "privateLayout"
	});
	this.route("privatePayments", {
		path: "/admin/pagamenti",
		template: "privatePayments",
		layoutTemplate: "privateLayout"
	});
	this.route("privateUsers", {
		path: "/admin/utenti",
		template: "privateUsers",
		layoutTemplate: "privateLayout"
	});
});

var requireLogin = function () {
	if (!Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render("accessDenied");
		}
		this.stop();
	}
};
var loggedOutRoutes = [
	"publicHome",
	"login",
	"publicItems"
];
Router.before(requireLogin, {except: loggedOutRoutes});
