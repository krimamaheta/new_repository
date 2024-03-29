/****************************************************************
 *            CODERBYTE ADDITIVE PERSISTENCE CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AdditivePersistence(num) take the num      *
 * parameter being passed which will always be a positive       *
 * integer and return its additive persistence which is the     *
 * number of times you must add the digits in num until you     *
 * reach a single digit. For example: if num is 2718 then your  *
 * program should return 2                                      *
 * because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.  *
 *                                                              *
 * Examples                                                     *
 * Input 1: 4                                                   *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: 19                                                  *
 * Output 2: 2                                                  *
 *                                                              *
 ***************************************************************/

function AdditivePersistence(num) {
    num = String(num);
    if (num.length === 1)
        return 0;
    let count = 0;
    // for (i of num)
    //     count += Number(i);
    // return AdditivePersistence(count);

    while (num.length != 1) {
        let digitSum = 0;
        let i;
        for (i of num)
            digitSum += Number(i);
        num = String(digitSum);
        count++;
    }
    return count;
}

console.log(AdditivePersistence(2718));