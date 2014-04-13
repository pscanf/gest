// Defines the Persons collection
Persons = new Meteor.Collection("persons", {
	// Defines the schema to which a Person must abide
	// The schema can be found in lib/Schemas.js
	schema: Schema.Person
});
