const express = require('express');
const router = express.Router();
const { printRequest } = require('../middleware/consoleMiddleware');
const { getRandomDictionaryWord, postDictionaryWord, putDictionaryWord, deleteDictionaryWord } = require('../controllers/dictionaryWordController');

router.get('/random', printRequest, getRandomDictionaryWord);
router.post('/', printRequest, postDictionaryWord);
router.put('/:id', printRequest, putDictionaryWord);
router.delete('/:id', printRequest, deleteDictionaryWord);

module.exports = router;