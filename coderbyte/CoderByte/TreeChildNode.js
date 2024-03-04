/*


Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:



which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
Examples
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false


*/



/*


solution 

tree{
    nodename: [ //node name can be value like 1 2 or any
        value,
        [parentnode], //maxsize = 1
        [childnode] //maxsize = 2
    ]
}


representaion : tree[nodename]
*/

function TreeConstructor(strArr) 
{
    strArr = strArr.map(e => e.slice(1, e.length - 1).split(','));
    let tree = {};
    
    for (let i = 0; i < strArr.length; i++) 
    {
        if (!tree[strArr[i][0]]) tree[strArr[i][0]] = [strArr[i][0], [], []];//creating node if not exist
        if (!tree[strArr[i][1]]) tree[strArr[i][1]] = [strArr[i][1], [], []];

        if (tree[strArr[i][0]][1].length >= 1) return false; //checking size of parent array if has length greater
        //than 1 return cause node false can have maximum 1 parent

        if (tree[strArr[i][1]][2].length >= 2) return false; //checking child size of parent node which sould maximum 2
        tree[strArr[i][1]][2].push(strArr[i][0]); // adding child node in parent

        tree[strArr[i][0]][1] = strArr[i][1]; //adding parent node in
    }
    return true;
}
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]));