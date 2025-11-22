import mongoose from "mongoose";

const remindersSchema = new mongoose.Schema({
	patientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Patient",
		required: true,
	},
	reminderType: {
		type: String,
		required: true,
		enum: ["medication", "appointment", "checkup", "goal"],
	},
	message: {
		type: String,
		required: true,
	},
	reminderDate: {
		type: Date,
		required: true,
	},
	isCompleted: {
		type: Boolean,
		default: false,
	},
	goalId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goal",
	},
	status: {
		type: String,
		enum: ["upcoming", "completed", "missed"],
		default: "upcoming",
	},
});

const Reminder = mongoose.model("Reminder", remindersSchema);

export default Reminder;