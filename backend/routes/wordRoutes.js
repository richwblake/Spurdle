const express = require('express');
const router = express.Router();
const { getRandomWord, postWord, putWord, deleteWord } = require('../controllers/wordController');
const { printRequest } = require('../middleware/consoleMiddleware');

router.get('/random', printRequest, getRandomWord);
router.post('/', printRequest, postWord);
router.put('/:id', printRequest, putWord);
router.delete('/:id', printRequest, deleteWord);

module.exports = router;