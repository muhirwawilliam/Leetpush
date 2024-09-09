/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let leeg = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            leeg.push(arr[i]);
        }
    }
    return leeg; 
};