const asyncHandler = require('express-async-handler');
const Word = require('../models/word');

const getRandomWord = asyncHandler(async (req, res) => {
  const words = await Word.find();
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex].content;

  res.status(200).json({ word: randomWord });
});

const postWord = asyncHandler(async (req, res) => {
  if ((!req.body.content) || req.body.content.toString().length !== 5) {
    res.status(400).json({ message: "Must include a content value of length 5 in request body" });
    throw new Error('Must include a content value of length 5 in request body');
  }

  const wordAlreadyExists = await Word.findOne({ content: req.body.content });

  if (wordAlreadyExists) {
    res.status(400).json({ message: "Word already exists"});
    throw new Error('Word already exists');
  }
  
  const word = await Word.create({
    content: req.body.content
  });

  res.status(201).json({ word });
});

const putWord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `edited word id: ${req.params.id}`});
});

const deleteWord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted word id: ${req.params.id}`});
});

module.exports = {
  getRandomWord,
  postWord,
  putWord,
  deleteWord
};