const { Suggestion } = require('../models');

const createSuggestion = async (suggestionBody) => {
  const suggestion = await Suggestion.create(suggestionBody);
  return suggestion;
};

const querySuggestions = async (filter, options) => {
  const suggestions = await Suggestion.paginate(filter, options);
  return suggestions;
};

const getSuggestionById = async (id) => {
  return Suggestion.findById(id);
};

module.exports = {
  createSuggestion,
  querySuggestions,
  getSuggestionById,
};
