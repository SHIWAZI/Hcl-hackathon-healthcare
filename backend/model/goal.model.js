import mongoose from "mongoose";

const goalsSchema = new mongoose.Schema(
	{
		patientId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Patient",
			required: true,
		},
		assignedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Assuming the assigner is a User (admin or doctor)
			required: true,
		},
		Title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		targetDate: {
			type: Date,
			required: true,
		},
		status: {
			type: Boolean, // True for achieved, False for in-progress
			default: false,
		},
		targetValue: {
			type: Number,
		},
		unit: {
			type: String, // e.g., 'kg', 'steps', 'minutes'
		},
		frequency: {
			type: String, // e.g., 'daily', 'weekly', 'monthly'
		},
		progress: [
			{
				date: { type: Date, default: Date.now },
				value: { type: Number },
			},
		],
	},
	{
		timestamps: true,
	}
);

const Goal = mongoose.model("Goal", goalsSchema);

export default Goal;