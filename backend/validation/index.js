

// Validation options
const options = {
    // Generic option
    basic: {
        abortEarly: true,
        convert: true,
        allowUnknown: false, // Rejects unknown fields (no stripping)
        stripUnknown: false, // Disable silent stripping
        skipFunctions: true,
        noDefaults: false    // Ensure defaults are applied
    },

    // Options for Array of array
    array: {
        abortEarly: true,
        convert: true,
        skipFunctions: true,
        stripUnknown: {
            objects: true,
        },
    },
};

export const bodyParamValidation = (req, res, next, schema) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Bad Request', error: "Missing required inputs" });
    }

    const option = options.basic;
    const { value, error } = schema.validate(req.body, option);

    if (error && Object.keys(error).length > 0) {
        return res
            .status(400)
            .send(error?.details);
    } else {
        req.body = value;
        next();
    }
};

export const queryParamValidation = (req, res, next, schema) => {
    if (!req.query) {
        return res
            .status(400)
            .send({ message: 'Bad Request', error: "Missing required inputs" });
    }

    const option = options.basic;
    const { error } = schema.validate(req.query, option);

    if (error && Object.keys(error).length > 0) {
        return res
            .status(400)
            .send(error);
    } else {
        if (req.bodyParam) return;
        else next();
    }
};

export const paramValidation = (req, res, next, schema) => {
    if (!req.params) {
        return res
            .status(400)
            .send({ message: 'Bad Request', error: "Missing required path parameters" });
    }

    const option = options.basic;
    const { value, error } = schema.validate(req.params, option);

    if (error && Object.keys(error).length > 0) {
        return res
            .status(400)
            .send(error?.details);
    } else {
        req.params = value;
        next();
    }
};

export default {
    bodyParamValidation,
    queryParamValidation,
    paramValidation
};