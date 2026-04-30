/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     let res = 0;

    for (let ch of s) res ^= ch.charCodeAt(0);
    for (let ch of t) res ^= ch.charCodeAt(0);

    return String.fromCharCode(res);
};