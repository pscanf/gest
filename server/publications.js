Meteor.publish("items", function () {
	var publicFields = {
		name: 1,
		description: 1,
		imgUrl: 1
	};
	if (!this.userId) {
		return Items.find({donorsCanOrder: true}, {fields: publicFields});
	}
	if (Roles.userIsInRole(this.userId, "donor")) {
		return Items.find({donorsCanOrder: true}, {fields: publicFields});
	}
	return Items.find({});
});

Meteor.publish("orders", function () {
	var publicFields = {
		item: 1
	};
	if (!this.userId) {
		return null;
	}
	if (Roles.userIsInRole(this.userId, "donor")) {
		return Items.find({user: this.userId}, {fields: publicFields});
	}
	return Orders.find({});
});

Meteor.publish("payments", function () {
	var publicFields = {
		amount: 1
	};
	if (!this.userId) {
		return null;
	}
	if (Roles.userIsInRole(this.userId, "donor")) {
		return Payments.find({user: this.userId}, {fields: publicFields});
	}
	return Payments.find({});
});

Meteor.publish("persons", function () {
	var publicFields = {
		firstName: 1
	};
	if (!this.userId) {
		return null;
	}
	if (Roles.userIsInRole(this.userId, "donor")) {
		return Persons.find({user: this.userId}, {fields: publicFields});
	}
	return Persons.find({});
});
