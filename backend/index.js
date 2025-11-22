import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/index.js";
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Or, configure CORS to allow specific origins
const corsOptions = {
	origin: 'http://localhost:5173', // Allow requests from this origin
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true, // Allow cookies to be sent with cross-origin requests
	optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json()); // allows us to accept JSON data in the req.body
app.use(router)
app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
