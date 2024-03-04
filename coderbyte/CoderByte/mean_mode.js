/****************************************************************
 *             CODERBYTE MEAN MODE CHALLENGE                    *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MeanMode(arr) take the array of numbers    *
 * stored in arr and return 1 if the mode equals the mean, 0 if *
 * they don't equal each other (ie. [5, 3, 3, 3, 1] should      *
 * return 1 because the mode (3) equals the mean (3)).          *
 *                                                              *
 * The array will not be empty, will only contain positive      *
 * integers, and will not contain more than one mode.           *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {1, 2, 3}                                 *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: new int[] {4, 4, 4, 6, 2}                           *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/
function MeanMode(arr) {
    arr.sort();
    let modeList = {};
    let sum = 0;
    let max = 0;
    let count = 0;
    arr.map(item => {
        if (modeList[item]) modeList[item]++;
        else modeList[item] = 1;
        if (count < modeList[item]) { max = item; count = modeList[item]; }
        sum += item;
    });
    const mean = sum / arr.length;
    const mode = max;
    if (mean === mode) return 1;
    return 0;
}
console.log(MeanMode([4, 4, 4, 6, 2, 6, 6, 6]));