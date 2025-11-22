import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import appointmentRoutes from "./routes/appointment.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies, authorization headers, etc.
  optionsSuccessStatus: 204
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);


app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
