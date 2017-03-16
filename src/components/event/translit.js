/* eslint-disable */
// github.com/iliakan/translit-ru-ua

const lowerSingle = {
  "і": "i", "ґ": "g", "ё": "yo", "№": "#", "є": "e",
  "ї": "yi", "а": "a", "б": "b",
  "в": "v", "г": "g", "д": "d", "е": "e", "ж": "zh",
  "з": "z", "и": "i", "й": "y", "к": "k", "л": "l",
  "м": "m", "н": "n", "о": "o", "п": "p", "р": "r",
  "с": "s", "т": "t", "у": "u", "ф": "f", "х": "h",
  "ц": "ts", "ч": "ch", "ш": "sh", "щ": "sch", "ъ": "",
  "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya"
};

const lowerMulti = {
  "ье": "ie",
  "ьё": "ie"
};

const upperSingle = {
  "Ґ": "G", "Ё": "YO", "Є": "E", "Ї": "YI", "І": "I",
  "А": "A", "Б": "B", "В": "V", "Г": "G",
  "Д": "D", "Е": "E", "Ж": "ZH", "З": "Z", "И": "I",
  "Й": "Y", "К": "K", "Л": "L", "М": "M", "Н": "N",
  "О": "O", "П": "P", "Р": "R", "С": "S", "Т": "T",
  "У": "U", "Ф": "F", "Х": "H", "Ц": "TS", "Ч": "CH",
  "Ш": "SH", "Щ": "SCH", "Ъ": "", "Ы": "Y", "Ь": "",
  "Э": "E", "Ю": "YU", "Я": "YA"
};
const upperMulti = {
  "ЬЕ": "IE",
  "ЬЁ": "IE"
};

const LOWER = {};
let key;
for (key in lowerSingle) {
  LOWER[key] = lowerSingle[key];
}
for (key in lowerMulti) {
  LOWER[key] = lowerMulti[key];
}

const UPPER = {};
for (key in upperSingle) {
  UPPER[key] = upperSingle[key];
}
for (key in upperMulti) {
  UPPER[key] = upperMulti[key];
}

let MULTI_KEYS = {};
for (key in lowerMulti) MULTI_KEYS[key] = lowerMulti[key];
for (key in upperMulti) MULTI_KEYS[key] = upperMulti[key];
MULTI_KEYS = Object.keys(MULTI_KEYS).sort(function(a, b) {
  return a.length > b.length;
});


// Transliterate a string with russian/ukrainian characters
export function transliterate(str) {
  const reg = new RegExp(MULTI_KEYS.join('|') + '|\\w|.', 'g');

  let result = "";
  const chars = str.match(reg);
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] in UPPER && chars[i + 1] in LOWER) {
      // combined case
      const r = UPPER[chars[i]].toLowerCase();
      result += r[0].toUpperCase() + r.slice(1);
    } else if (chars[i] in UPPER) {
      result += UPPER[chars[i]];
    } else if (chars[i] in LOWER) {
      result += LOWER[chars[i]];
    } else {
      result += chars[i];
    }
  }

  return result;
}
