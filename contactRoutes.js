const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define the routes and map them to controller methods
router.post('/createContact', contactController.createContact);
router.post('/getContact', contactController.getContact);
router.post('/updateContact', contactController.updateContact);
router.post('/deleteContact', contactController.deleteContact);

module.exports = router;
