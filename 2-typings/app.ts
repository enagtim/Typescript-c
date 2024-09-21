const TEN: number = 10;
const ONE_HUNDRED: number = 100;
const ONE_THOUSAND: number = 1000;
const ONE_MILLION: number = 1000000;
const ONE_BILLION: number = 1000000000;
const ONE_TRILLION: number = 1000000000000;
const ONE_QUADRILLION: number = 1000000000000000;
const MAX: number = 9007199254740992;
const LESS_THAN_TWENTY: string[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const TENTHS_LESS_THAN_HUNDRED: string[] = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
function toWords(number: number | string, asOrdinal?: boolean): string {
  const num: number = parseInt(number.toString(), 10);
  if (!isFinite(num)) {
    throw new TypeError(
      `Not a finite number: ${number} (${typeof number})`
    );
  }
  if (!isSafeNumber(num)) {
    throw new RangeError(
      "Input is not a safe number, it’s either too large or too small."
    );
  }
  
  const words: string = generateWords(num);
  return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number: number, words?: string[]): string {
  let remainder: number;
  let word: string;
  if (number === 0) {
    return !words ? "zero" : words.join(" ").replace(/,$/, "");
  }
  if (!words) {
    words = [];
  }
  if (number < 0) {
    words.push("minus");
    number = Math.abs(number);
  }
  if (number < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];
  }
  else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
    if (remainder) {
      word += "-" + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  }
  else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + " hundred";
  }
  else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + " thousand,";
  }
  else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + " million,";
  }
  else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + " billion,";
  }
  else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + " trillion,";
  }
  else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word = generateWords(Math.floor(number / ONE_QUADRILLION)) + " quadrillion,";
  }

  words.push(word);
  return generateWords(remainder, words);
}
export { toWords };