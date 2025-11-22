import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
	patientId: {
		type: String,
		ref: "Patient",
		required: true,
	},
	providerId: {
		type: String,
		ref: "Provider",
		required: true,
	},
	serviceId: {
		type: String,
		ref: "Service",
		required: true,
	},
	appointmentDate: {
		type: Date,
		required: true,
	},
	status: {
		type: String,
		enum: ["scheduled", "completed", "canceled"],
		default: "scheduled",
	},
	notes: {
		type: String,
	},
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;