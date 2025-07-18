const express = require('express');
const { getAll, addProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAll);
router.post('/', auth, addProduct);  // only for admin ideally

module.exports = router;
