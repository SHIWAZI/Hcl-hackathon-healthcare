import Joi from 'joi';
import { bodyParamValidation, paramValidation } from './index.js';

export const assaingGoalValidation = (req, res, next) => {
    const schema = Joi.object({
        // patientId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        // assaignedBy: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        title: Joi.string().trim().min(1).max(200).required(),
        description: Joi.string().trim().max(500).optional().allow(''),
        targetValue: Joi.number().required(),
        unit: Joi.string().valid('steps', 'hours', 'mins', 'kcal').required(),
        frequency: Joi.string().valid('daily', 'weekly', 'monthly').optional().default('daily'),
        // targetDate: Joi.date().required(),
    });

    return bodyParamValidation(req, res, next, schema);
};

export const assaingGoalParamValidation = (req, res, next) => {
    const schema = Joi.object({
        patientId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    });

    return paramValidation(req, res, next, schema);
};
