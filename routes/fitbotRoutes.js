const express = require('express');
const router = express.Router();
const fitbotController = require('../controllers/fitbotController');
const { AuthMiddleware } = require('../middleware/authMiddleware');

// Create new chat log
router.post('/writeLog', AuthMiddleware.checkBlacklist, fitbotController.createLog);
router.get('/getLogs', AuthMiddleware.checkBlacklist, fitbotController.getUserLogs);
router.get('/getTodayLogs', AuthMiddleware.checkBlacklist, fitbotController.getTodayLogs);

module.exports = router;