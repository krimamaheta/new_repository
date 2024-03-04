// Pascal triangle 
//     1 
//    1 1 
//   1 2 1 
//  1 3 3 1 
// 1 4 6 4 1 
function addRow(numRow, result, curRow) {
    if (curRow > numRow) return result;
    const prevRow = result[curRow - 2];
    let curArr = [1];
    for (let i = 0; i < prevRow.length - 1; i++)
        curArr.push(prevRow[i] + prevRow[i + 1]);
    curArr.push(1);
    result.push(curArr);
    return addRow(numRow, result, curRow + 1);
}
function PascalTriangle(numRow) {
    if (numRow < 1) return -1;
    if (numRow === 1) return [[1]];
    if (numRow === 2) return [[1], [1, 1]];
    let result = [[1], [1, 1]];
    return addRow(numRow, result, 3);
}
console.log(PascalTriangle(5));