
//if the string same with str2 math so that return true otherwise return false
//" rkqodlw"  and compare with ""world" --return true 
//if h3llo and hello  -false

// function stringscramble(str)
// {
//     let [str1,str2]=str;
//     str1.split(',');
//     str2.split(',');
//     // console.log(s1,s2);
//     for(let i=0; i<str2.length; i++)
//     {
//         let char=str2[i];

//         let index=char.includes(str2[i]);

//         if(index===-1)
//         {
//             return false;
//         }
//         str1=str1.substring(0,str1)+str1.substring(index+1);
//         console.log(str1);
//     }
//     return true;

// }
// console.log(stringscramble([" rkqodlw" ,"world"]));


function stringscramble(str)
{
    let [str1,str2]=str;
    str1.split(',');
    str2.split(',');
    // console.log(s1,s2);
    for(let i=0; i<str1.length; i++)
    {
        for(let j=str1.length-1; j>=0; j--)
        {
            const char=str2[i];
            let index=str2.indexOf(char);
            console.log(index);

            if(index===-1)
            {
                return false;
            }
            str.pop();
            console.log(str);

        }
    }
    return true;
}
console.log(stringscramble([" rkqodlw" ,"world"]));

 

