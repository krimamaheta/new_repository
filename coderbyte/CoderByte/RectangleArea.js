/****************************************************************
 *             CODERBYTE RECTANGLE AREA CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function RectangleArea(strArr) take the array of    *
 * strings stored in strArr, which will only contain 4 elements *
 * and be in the form (x y) where x and y are both integers, and*
 * return the area of the rectangle formed by the 4 points on a *
 * Cartesian grid. The 4 elements will be in arbitrary order.   *
 * For example: strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"]  *
 * then your program should return 6 because the width of the   *
 * rectangle is 3 and the height is 2 and the area of a         *
 * rectangle is equal to the width * height.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["(1 1)","(1 3)","(3 1)","(3 3)"]                   *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: ["(0 0)","(1 0)","(1 1)","(0 1)"]                   *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/
function RectangleArea(strArr) {
    const p1 = strArr[0].slice(1).slice(0, strArr[0].length - 2).split(" ").map(e => Number(e));
    const p2 = strArr[1].slice(1).slice(0, strArr[1].length - 2).split(" ").map(e => Number(e));
    const p3 = strArr[2].slice(1).slice(0, strArr[2].length - 2).split(" ").map(e => Number(e));
    const p4 = strArr[3].slice(1).slice(0, strArr[3].length - 2).split(" ").map(e => Number(e));
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    const [x4, y4] = p4;
    const width = Math.max(x1, x2, x3, x4) - Math.min(x1, x2, x3, x4);
    const height = Math.max(y1, y2, y3, y4) - Math.min(y1, y2, y3, y4);
    return width * height;
}
console.log(RectangleArea(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]));