const express = require('express');
const router = express.Router();

const uploadMulter = require('../services/upload')

const validator = require('../services/validator')

const { createCategory } = require('../controllers/category.controller.js');

router.post('/category', uploadMulter, validator, createCategory);

module.exports = router;