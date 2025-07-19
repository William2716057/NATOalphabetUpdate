const dict_1908 = {
  A: "Authority", B: "Bills", C: "Capture", D: "Destroy", E: "Englishmen",
  F: "Fractious", G: "Galloping", H: "High", I: "Invariably", J: "Juggling",
  K: "Knights", L: "Loose", M: "Managing", N: "Never", O: "Owners",
  P: "Play", Q: "Queen", R: "Remarks", S: "Support", T: "The",
  U: "Unless", V: "Vindictive", W: "When", X: "Xpeditiously", Y: "Your", Z: "Zigzag"
};

const dict_1917 = {
  A: "Apples", B: "Butter", C: "Charlie", D: "Duff", E: "Edward",
  F: "Freddy", G: "George", H: "Harry", I: "Ink", J: "Johnnie",
  K: "King", L: "London", M: "Monkey", N: "Nuts", O: "Orange",
  P: "Pudding", Q: "Queenie", R: "Robert", S: "Sugar", T: "Tommy",
  U: "Uncle", V: "Vinegar", W: "Willie", X: "Xerxes", Y: "Yellow", Z: "Zebra"
};

const dict_1927 = {
  A: "Amsterdam", B: "Baltimore", C: "Casablanca", D: "Denmark", E: "Edison",
  F: "Florida", G: "Gallipoli", H: "Havana", I: "Italia", J: "Jerusalem",
  K: "Kilogramme", L: "Liverpool", M: "Madagascar", N: "New-York", O: "Oslo",
  P: "Paris", Q: "Quebec", R: "Roma", S: "Santiago", T: "Tripoli",
  U: "Uppsala", V: "Valencia", W: "Washington", X: "Xanthippe", Y: "Yokohama", Z: "Zurich"
};

const dict_1956 = {
  A: "Alfa", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo",
  F: "Foxtrot", G: "Golf", H: "Hotel", I: "India", J: "Juliett",
  K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar",
  P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango",
  U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray", Y: "Yankee", Z: "Zulu"
};

function translateToDictWords(input, dict) {
  const result = [];

  for (let char of input.toUpperCase()) {
    if (dict[char]) { 
      result.push(dict[char]);
    } else {
      result.push(`[Unknown:${char}]`);
    }
  }

  return result.join(" ");
}

// Get first letters 
function getFirstLetters(input) {
  return input
    .split(/\s+/)
    .map(word => word[0])
    .filter(Boolean)
    .join('');
}

// Are all words in dictionary
function allWordsInDict(words, dict) {
  const dictWords = new Set(Object.values(dict));
  return words.every(word => dictWords.has(word));
}

// Input
const aWordSpelledOut = readline();
const inputWords = aWordSpelledOut.trim().split(/\s+/);

// Check against each dictionary
if (allWordsInDict(inputWords, dict_1908)) {
  //console.log("Found in 1908");
  const letters = getFirstLetters(aWordSpelledOut);
  console.log(translateToDictWords(letters, dict_1917));
} else if (allWordsInDict(inputWords, dict_1917)) {
  //console.log("Found in 1917");
  const letters = getFirstLetters(aWordSpelledOut);
  console.log(translateToDictWords(letters, dict_1927));
} else if (allWordsInDict(inputWords, dict_1927)) {
  //console.log("Found in 1927");
  const letters = getFirstLetters(aWordSpelledOut);
  console.log(translateToDictWords(letters, dict_1956));
} else if (allWordsInDict(inputWords, dict_1956)) {
  //console.log("Found in 1956");
  const letters = getFirstLetters(aWordSpelledOut);
  console.log(translateToDictWords(letters, dict_1908));
} else {
  console.log("Not found in any dictionary");
}
