// Defines the Payments collection
Payments = new Meteor.Collection("payments", {
	// Defines the schema to which a Payment must abide
	// The schema can be found in lib/Schemas.js
	schema: Schema.Payment
});
