const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const suggestionRoute = require('./suggestion.route');
const docsRoute = require('./docs.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/suggestions', suggestionRoute);
router.use('/docs', docsRoute);

module.exports = router;