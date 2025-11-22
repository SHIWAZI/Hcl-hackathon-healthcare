import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	providerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User", // Assuming a "doctor" or "admin" role from User collection is the author
		required: true,
	},
	tags: {
		type: [String],
	},
	publishedDate: {
		type: Date,
		default: Date.now,
	},
	isPublished: {
		type: Boolean,
		default: false,
	},
	comments: [
		{
			commenter: { type: String }, // Can be a User ID or just a name
			text: { type: String, required: true },
			commentDate: { type: Date, default: Date.now },
		},
	],
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;