const Joi = require('joi');

function registerValidation(data) {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(255),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(8),
    github: Joi.string().required(),
    phoneNumber: Joi.string().required().min(11).max(11),
    cpf: Joi.string().required().min(11).max(11),
    stack: Joi.string().required(),
    experience: Joi.string().required()
  });

  return schema.validate(data);
}

function loginValidation(data) {
  const schema = Joi.object({
    cpf: Joi.string().required(),
    password: Joi.string().required()
  });

  return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;