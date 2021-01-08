import Joi from "@hapi/joi";

export const essayValidation = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    guardianName: Joi.string().required(),
    parentsId: Joi.string().required().min(16).max(16),
    email: Joi.string().allow(""),
    birthDate: Joi.date().required(),
    phone: Joi.string().allow(""),
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

export const messageValidation = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required().email(),
    phoneNumber: Joi.string().required(),
    message: Joi.string().required().min(8)
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ err: error.details[0].message });
  next();
};

export const eventValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(8).max(50).required(),
    caption: Joi.string().min(8).required(),
    photoUrl: Joi.string().required()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({err: error.details[0].message})
  next();
};

export const eventUpdateValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(8).max(50),
    caption: Joi.string().min(8),
    photoUrl: Joi.string()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({err: error.details[0].message})
  next();
}
