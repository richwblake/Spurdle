const express = require('express');
const router = express.Router();
const { getWord, postWord, putWord, deleteWord } = require('../controllers/wordController');
const { printRequest } = require('../middleware/consoleMiddleware');

router.get('/', printRequest, getWord);
router.post('/', printRequest, postWord);
router.put('/:id', printRequest, putWord);
router.delete('/:id', printRequest, deleteWord);

module.exports = router;