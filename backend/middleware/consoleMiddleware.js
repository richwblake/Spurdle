const asyncHandler = require('express-async-handler');
const colors = require('colors');

const printRequest = asyncHandler(async (req, res, next) => {
  const requestData = `${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`
  console.log(`Request: ${requestData}`.cyan)
  next();
});

module.exports = {
  printRequest
};