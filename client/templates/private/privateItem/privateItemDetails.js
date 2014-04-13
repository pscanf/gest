Template.privateItemDetails.helpers({
	editing: function () {
		return Session.get(this._id + "-editing-details") === "true";
	}
});

Template.privateItemDetails.events({
	"click [data-edit]": function () {
		Session.set(this._id + "-editing-details", "true");
	},
	"click [data-discard]": function () {
		var form = $("#privateItemDetails");
		form.find("[name=stockQuantity]").val(this.stockQuantity);
		form.find("[name=forOffer]")[0].checked = this.forOffer;
		form.find("[name=currentlyOffering]")[0].checked = this.currentlyOffering;
		Session.set(this._id + "-editing-details", "false");
	},
	"submit form": function (e) {
		e.preventDefault();
		Session.set(this._id + "-editing-details", "false");
		var form = $(e.target);
		var updates = {
			stockQuantity:		form.find("[name=stockQuantity]").val() || 0,
			forOffer:			form.find("[name=forOffer]")[0].checked,
			currentlyOffering:	form.find("[name=currentlyOffering]")[0].checked
		};
		Items.update(this._id, {$set: updates});
	}
});
