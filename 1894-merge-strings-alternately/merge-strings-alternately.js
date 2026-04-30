/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str1=word1.split("")
    let str2=word2.split("")
    let res=[]
    let max=Math.max(str1.length,str2.length)
    for(let i=0;i<max;i++){
        if(0<str1.length)res.push(str1[i])
        if(0<str2.length)res.push(str2[i])
    }
    return res.join("")
};