// Defines the Orders collection
Orders = new Meteor.Collection("orders", {
	// Defines the schema to which an Order must abide
	// The schema can be found in lib/Schemas.js
	schema: Schema.Order
});
