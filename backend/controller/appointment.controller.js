import mongoose from "mongoose";
import Appointment from "../model/appointment.model.js";

// Create a new appointment
export const createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all appointments
export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an appointment
export const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};