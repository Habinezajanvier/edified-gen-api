import Joi from "@hapi/joi";

const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    guardianName: Joi.string().required(),
    parentsId: Joi.string().required(),
    email: Joi.string().required().email(),
    birthDate: Joi.date().required(),
    phone: Joi.string().min(10).max(13).required(),
    guardianPhone: Joi.string().min(10).max(13).required(),
    district: Joi.string().required(),
    school: Joi.string().required(),
    year: Joi.string().required(),
    topic: Joi.string().required(),
    essay: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ err: error.details[0].message });
  next();
};

export default registerValidation;
