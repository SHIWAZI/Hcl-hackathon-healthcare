import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
	providerName: {
		type: String,
		required: true,
	},
	specialization: {
		type: String,
		required: true,
	},
	contactInfo: {
		phone: { type: String },
		address: { type: String },
	},
});

const Provider = mongoose.model("Provider", providerSchema);

export default Provider;