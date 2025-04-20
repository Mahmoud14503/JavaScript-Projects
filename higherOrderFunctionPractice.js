let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = ele => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
console.log(swappingCases.split("").map(sw).join(""));

console.log(invertedNumbers.map(function (ele){return -ele;}));
let inv = invertedNumbers.map(ele => -ele);
console.log(inv);

console.log(ignoreNumbers.split("").map(function(ele) {
    return isNaN(Number(ele)) ? ele : "";
}).join(""));

let ign = ignoreNumbers.split("").map(ele => isNaN(Number(ele)) ? ele : "").join("");
console.log(ign);

let ign2 = ignoreNumbers.split("").filter(ele => isNaN(Number(ele)));
console.log(ign2);

let mix = "A13BS2Zx";

let mi = mix.split("").filter(ele => !isNaN(parseInt(ele))).map(ele => ele ** 2);
console.log(mi);
