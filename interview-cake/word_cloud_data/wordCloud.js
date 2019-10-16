class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    const isLetter = char => {
      return "'-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char) > -1;
    };

    let start = 0;
    let foundWord = false;
    for (let i = 1; i <= inputString.length; i += 1) {
      const char = inputString[i];
      if (!isLetter(char) && isLetter(inputString[i - 1])) {
        // reached end of word, update map
        foundWord = true;
        const word = inputString.substring(start, i).toLowerCase();
        const count = this.wordsToCounts.get(word);

        this.wordsToCounts.set(word, count ? count + 1 : 1);
      } else if (isLetter(char) && foundWord) {
        start = i;
        foundWord = false;
      }
    }
  }
}

const words = 'Hello, my name is is is is khalal walker hello......';
const wordCloudData = new WordCloudData(words);
console.log(wordCloudData.wordsToCounts);
module.exports = WordCloudData;
