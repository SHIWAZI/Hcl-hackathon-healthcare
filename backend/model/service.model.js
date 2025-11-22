import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
	serviceName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	providerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Provider",
		required: true,
	},
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;