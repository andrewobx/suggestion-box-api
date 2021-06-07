const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSuggestion = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const getSuggestions = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
  }),
};

const getSuggestion = {
  params: Joi.object().keys({
    suggestionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestion,
};
