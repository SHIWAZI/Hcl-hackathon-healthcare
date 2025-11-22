import Goal from '../model/goal.model.js';

export const assignGoal = async (req, res) => {
    try {
        const { patientId } = req.params
        const newGoal = new Goal({
            title: req.body.title,           // e.g., "Daily Steps"
            patientId: patientId,
            // assignedBy: req.body.assignedBy, // ID of the Doctor/Provider
            description: req.body.description,
            targetValue: req.body.targetValue,
            unit: req.body.unit,             // e.g., "steps"
            frequency: req.body.frequency || 'daily',
            status: true,                    // Active by default
            // progress: [],
            // targetDate: req.body.targetDate,
            // assignedBy: ""                   // Initialize empty history
        });

        const savedGoal = await newGoal.save();
        res.status(201).json({ success: true, data: savedGoal });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};