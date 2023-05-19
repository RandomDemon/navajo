var navajoDict = {
  'a': 'wol-la-chee',
  'b': 'shush',
  'c': 'moasi',
  'd': 'be',
  'e': 'dzeh',
  'f': 'ma-e',
  'g': 'klizzie',
  'h': 'lin',
  'i': 'ah-jah',
  'j': 'tse-nill',
  'k': 'klizzie-yazzi',
  'l': 'dibeh-yazzi',
  'm': 'na-as-tso-si',
  'n': 'nesh-chee',
  'o': 'ne-ahs-jah',
  'p': 'bi-sodih',
  'q': 'ca-yeilth',
  'r': 'gah',
  's': 'dibeh',
  't': 'than-zie',
  'u': 'shi-da',
  'v': 'a-keh-di-glini',
  'w': 'gloe-ih',
  'x': 'al-an-as-dzoh',
  'y': 'tse-nill',
  'z': 'tso',
};

var englishDict = {
  'wol-la-chee': 'a',
  'shush': 'b',
  'moasi': 'c',
  'be': 'd',
  'dzeh': 'e',
  'ma-e': 'f',
  'klizzie': 'g',
  'lin': 'h',
  'ah-jah': 'i',
  'tse-nill': 'j',
  'klizzie-yazzi': 'k',
  'dibeh-yazzi': 'l',
  'na-as-tso-si': 'm',
  'nesh-chee': 'n',
  'ne-ahs-jah': 'o',
  'bi-sodih': 'p',
  'ca-yeilth': 'q',
  'gah': 'r',
  'dibeh': 's',
  'than-zie': 't',
  'shi-da': 'u',
  'a-keh-di-glini': 'v',
  'gloe-ih': 'w',
  'al-an-as-dzoh': 'x',
  'tse-nill': 'y',
  'tso': 'z',
};

function translateToNavajo() {
  var inputText = document.getElementById('text').value.toLowerCase();
  var translatedText = '';
  for (var i = 0; i < inputText.length; i++) {
    var character = inputText.charAt(i);
    if (navajoDict.hasOwnProperty(character)) {
      translatedText += navajoDict[character] + ' ';
    } else {
      translatedText += character + ' ';
    }
  }
  document.getElementById('navajo-text').value = translatedText.trim();
}

function translateToEnglish() {
  var inputText = document.getElementById('text').value.toLowerCase();
  var words = inputText.split(' ');
  var translatedText = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (englishDict.hasOwnProperty(word)) {
      translatedText += englishDict[word];
    } else {
      translatedText += word;
    }
  }
  document.getElementById('english-text').value = translatedText;
}
