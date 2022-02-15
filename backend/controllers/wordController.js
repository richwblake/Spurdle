const asyncHandler = require('express-async-handler');

const getWord = asyncHandler(async (req, res,) => {
  res.status(200).json({ message: 'get word'});
});

const postWord = asyncHandler(async (req, res,) => {
  res.status(201).json({ message: 'created word'});
});

const putWord = asyncHandler(async (req, res,) => {
  res.status(200).json({ message: `edited word id: ${req.params.id}`});
});

const deleteWord = asyncHandler(async (req, res,) => {
  res.status(200).json({ message: `deleted word id: ${req.params.id}`});
});

module.exports = {
  getWord,
  postWord,
  putWord,
  deleteWord
};