let str = "K     amraaaaaa       an";

function letterCount(s) {
    let result = {};
    for (let i = 0; i < s.length; i++) {
        if (result[s.charAt(i)] === undefined) {
            result[s.charAt(i)] = 1;
        } else {
            result[s.charAt(i)] += 1;
        }
    }
    return result;
}

console.log(letterCount(str))