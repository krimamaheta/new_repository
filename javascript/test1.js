


// let b = [
//     ['a', 12],
//     ['b', 1],
//     ['c', -11],
//     ['a', 11],
//     ['c', 1],
//     ['a', -1],
    
//     ];
//     let a = {};
    
//     for (i of b) 
//     {
//     console.log(i);
//     if (a[i[0]])
//      a[i[0]] += i[1];

//     else 
//     a[i[0]] = i[1];
//     }
//     console.log(a);
    

    // let a=[ ['a',1],['b:',1],['a',1]];

    // let b={};

    // for (let i of a)
    // {
    //     console.log(i);

    //     if(b[i[0]])
    //         b[i[0]]+=i[1];
    //      else
    //         b[i[0]]=i[1];   
    // }
    // console.log(b);


    //ADDING THE POSITION OF INDEX

    function test(arr)
    {
        //  arr1=arr.split(',');
        //  console.log(arr);
        let b={};
        for(let i=0; i<arr.length; i++)
        {
            console.log(arr);
            if(b[i[0]])
            {
                b[i[0]]+=i[1];
                console.log(b);
            }
              
            else
            {
                b[i[0]]=i[1]; 
                console.log(b);
            }
               
        }
        return b;
    }
    console.log(test([ ['a',1],['b:',1],['a',1]]));


