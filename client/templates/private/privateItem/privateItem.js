Template.privateItem.helpers({
	deleting: function () {
		return Session.get(this._id + "-deleting") === "true";
	}
});

Template.privateItem.events({
	"click .nav a": function (e) {
		e.preventDefault();
	},
	"click [data-delete]": function () {
		Session.set(this._id + "-deleting", "true");
	},
	"click [data-delete-no]": function () {
		Session.set(this._id + "-deleting", "false");
	},
	"click [data-delete-yes]": function () {
		Items.remove(this._id);
		Router.go("privateItems");
	}
});
