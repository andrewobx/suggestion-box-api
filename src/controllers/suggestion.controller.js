const catchAsync = require('../utils/catchAsync');
const { suggestionService } = require('../services');
const httpStatus = require('http-status');
const pick = require('../utils/pick');

const createSuggestion = catchAsync(async (req, res) => {
  const suggestion = await suggestionService.createSuggestion({
    ...req.body,
    user: req.user.id
  });
  res.status(httpStatus.CREATED).send(suggestion);
});

const getSuggestions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'description']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await suggestionService.querySuggestions(filter, options);
  res.send(result);
});

const getSuggestion = catchAsync(async (req, res) => {
  const suggestion = await suggestionService.getSuggestionById(req.params.suggestionId);
  res.send(suggestion);
});

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestion,
};
