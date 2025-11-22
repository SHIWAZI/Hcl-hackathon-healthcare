import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
		enum: ["Male", "Female", "Other", "Prefer not to say"],
	},
	contactInfo: {
		phone: { type: String },
		address: { type: String },
	},
	allergies: [
		{
			Name: { type: String },
			fromDate: { type: Date },
			Medicine: { type: [String] }, // Array of medicines
		},
	],
	Address: {
		type: String,
	},
	consentToShareData: {
		type: Boolean,
		default: false,
	},
	bloodType: {
		type: String,
	},
	emergencyContact: {
		name: { type: String },
		phone: { type: String },
	},
	weight: {
		type: Number, // In kilograms (kg)
	},
	height: {
		type: Number, // In centimeters (cm)
	},
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;