Template.publicHome.helpers({
	items: function () {
		return Items.find({donorsCanOrder: true});
	}
});
