Meteor.startup(function () {
	if(!Meteor.roles.findOne({name: "admin"})) {
		Roles.createRole("admin");
	}
	if(!Meteor.roles.findOne({name: "warehouse"})) {
		Roles.createRole("warehouse");
	}
	if(!Meteor.roles.findOne({name: "data_entry"})) {
		Roles.createRole("data_entry");
	}
	if(!Meteor.roles.findOne({name: "donor"})) {
		Roles.createRole("donor");
	}
});
