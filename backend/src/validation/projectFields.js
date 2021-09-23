const Joi = require('joi');

function createProjectValidation(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    techPreference: Joi.string()
  });

  return schema.validate(data);
}

module.exports.createProjectValidation = createProjectValidation;