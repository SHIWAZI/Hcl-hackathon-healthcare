import mongoose from "mongoose";

const wellnessSchema = new mongoose.Schema({
	patientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Patient",
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now,
	},
	checkUpDate: {
		type: Date,
	},
	symptoms: {
		type: [String],
	},
	sleepHours: {
		type: Number, // Average sleep hours per night
	},
	steps: {
		type: Number, // Average daily steps
	},
	activeTime: {
		type: Number, // Average daily active time in minutes
	},
});

const Wellness = mongoose.model("Wellness", wellnessSchema);

export default Wellness;