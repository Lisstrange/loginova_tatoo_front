const str1 = "abs1";
const str2 = "1sba";
const str3 = "gvegas";

const sortStr = (ssstr = "") => {
  return ssstr.toLowerCase().split("").sort().join("");
};
const isAnagrm = (fstr, sstr) => {
  return sortStr(fstr) === sortStr(sstr);
};

const arr = ["abs", "attachment", "attachment", "sba", "gvegas"];

const isAnagramInArr = (strArr = [""]) => {
  let anagrams = [];

  let anagramGroups = {};

  strArr.forEach((word) => {
    const sortedWord = sortStr(word);

    if (anagramGroups.hasOwnProperty(sortedWord)) {
      anagramGroups[sortedWord].push(word);
    } else {
      anagramGroups[sortedWord] = [word];
    }
  });

  Object.values(anagramGroups).forEach((v) => {
    if (v.length > 1) {
      anagrams = anagrams.concat(v);
    }
  });

  return anagrams;
};

const start1 = Date.now();
const result1 = isAnagramInArr(arr);
console.log("разница1", Date.now() - start1);

console.log(12 / 5);
