const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');

router.get('/',feedbackController.getFeedbacks);
router.post('/', feedbackController.createFeedback);

module.exports = router;
