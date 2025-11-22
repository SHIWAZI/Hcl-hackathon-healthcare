import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		emailId: {
			type: String,
			required: true,
			unique: true, // Ensures no two users have the same email
		},
		hashPassword: {
			type: String,
			required: true,
		},
		refreshToken: {
			type: String,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		roles: {
			type: [String], // Array of strings
			enum: ["admin", "user", "doctor"],
			default: ["user"],
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Links to another User
		},
	},
	{
		timestamps: true, // creates createdAt and updatedAt fields
	}
);

const User = mongoose.model("User", userSchema);

export default User;