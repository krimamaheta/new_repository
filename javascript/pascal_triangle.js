// 1
// 11
// 121
// 1331


    let pascalTriangle = [];

    let numRows = 5;

    for (let row = 0; row < numRows; row++) 
    {
        let list = [];
        if (row === 0) {
            list.push(1);
            pascalTriangle.push(list)
            continue;
        }
        if (row === 1) {
            list.push(1, 1);
            pascalTriangle.push(list)
            continue;
        }
        for (let col = 0; col <= row; col++) 
        {
            //to add 1 in start and end position
            if (col === 0 || col === row) 
            {
                list.push(1);
                continue;
            }

            let sum = pascalTriangle[row - 1][col - 1] + pascalTriangle[row - 1][col];
            list.push(sum);
        }
        pascalTriangle.push(list);
    }

console.log(pascalTriangle);

//console.log(pascal(4));


// git remote  set-url origin https:// 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@github.com/krimamaheta/hello_test