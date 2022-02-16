const asyncHandler = require('express-async-handler');
const DictionaryWord = require('../models/dictionaryWord');

const getRandomDictionaryWord = asyncHandler(async (req, res) => {
  const words = await DictionaryWord.find();
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].content;

  res.status(200).json({ word: randomWord });
});

const postDictionaryWord = asyncHandler(async (req, res) => {
  if ((!req.body.content) || req.body.content.toString().length !== 5) {
    res.status(400).json({ message: "Must include a content value of length 5 in request body" });
    throw new Error('Must include a content value of length 5 in request body');
  }

  const wordAlreadyExists = await DictionaryWord.findOne({ content: req.body.content });

  if (wordAlreadyExists) {
    res.status(400).json({ message: "Word already exists"});
    throw new Error('Word already exists');
  }
  
  const word = await DictionaryWord.create({
    content: req.body.content
  });

  res.status(201).json({ word });
});

const putDictionaryWord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `edited word id: ${req.params.id}`});
});

const deleteDictionaryWord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted word id: ${req.params.id}`});
});

module.exports = {
  getRandomDictionaryWord,
  postDictionaryWord,
  putDictionaryWord,
  deleteDictionaryWord
};