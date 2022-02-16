const axios = require('axios');
const colors = require('colors');
const fs = require('fs');
const readline = require('readline');

const WORD_API_URL = 'http://localhost:3001/api/words';
const DICTIONARY_WORD_API_URL = 'http://localhost:3001/api/dictionary';

const seedDatabaseWithSpurdleWords = async () => {
  let countOfWordsAddedOrUpdated = 0;
  const fileStream = fs.createReadStream('/Users/whalehaven/Developer/javascript/react/spurdle/backend/config/wordList.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  console.log('Updating Word database...');

  for await (const line of rl) {
    try {
      await axios.post(WORD_API_URL, { content: line.trim() });
      countOfWordsAddedOrUpdated++;
      console.log(`Added ${line} to Word DB`);
    } catch (error) {
      if (error.response.data.message === 'Word already exists') {
        countOfWordsAddedOrUpdated++;
      }
    }
  }
  console.log(`Word database updated with ${countOfWordsAddedOrUpdated} items`.cyan.underline);
}

const seedDatabaseWithDictionaryWords = async () => {
  let countOfWordsAddedOrUpdated = 0;
  const fileStream = fs.createReadStream('/Users/whalehaven/Developer/javascript/react/spurdle/backend/config/dictionaryWordList.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  console.log('Updating Dictionary database...');

  for await (const line of rl) {
    try {
      await axios.post(DICTIONARY_WORD_API_URL, { content: line.trim() });
      countOfWordsAddedOrUpdated++;
      console.log(`Added ${line} to Dictionary DB`);
    } catch (error) {
      if (error.response.data.message === 'Word already exists') {
        countOfWordsAddedOrUpdated++;
      }
    }
  }
  console.log(`Dictionary Word database updated with ${countOfWordsAddedOrUpdated} items`.cyan.underline);
}

const seed = async () => {
  await seedDatabaseWithSpurdleWords();
  await seedDatabaseWithDictionaryWords();
}

seed();