
//Have the function TreeConstructor(strArr) take the array of strings stored in strArr,
// which will contain pairs of integers in the following format: (i1,i2),
// where i1 represents a child node in a tree and the second integer i2 signifies 
//that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], 
//then this forms the following tree:



// which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
// Examples

// Examples
// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true
// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false

function treeconstructor(str)
{
    let tree={};

    str=str.map(e=>e.slice(1,str.length-1).split(',').map(i=>Number(i)));
    console.log(str);

    for(let i=0; i<str.length; i++)
    {
        let child=str[i][0];
        let parent=str[i][1];
        
        if(!tree[parent]) tree[parent]={child:[],parent:[] };
        if(!tree[child])tree[child]={child:[],parent:[] };

        if(tree[parent].child.length>=2)return false;

        if(tree[child].parent.length>=1)return false;

        tree[parent].child.push(child);
        tree[child].parent.push(parent);

    }
    return true;
}
console.log(treeconstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));