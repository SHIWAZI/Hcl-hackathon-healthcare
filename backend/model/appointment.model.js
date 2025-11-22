import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
	patientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Patient",
		required: true,
	},
	providerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Provider",
		required: true,
	},
	serviceId: {
		type: mongoose.Schema.Types.ObjectId,
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