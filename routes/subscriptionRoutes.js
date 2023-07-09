const express = require('express');
const router = express.Router();
const {
  getSubscriptions,
  addSubscription,
  removeSubscription
} = require('../controllers/subscriptionController');

router.get('/', getSubscriptions);
router.post('/', addSubscription);
router.delete('/', removeSubscription);

module.exports = router;
