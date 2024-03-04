/**
 * Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.*/

//gretest number of repeted letter

function letter_c(str)
{
    str=str.split(' ');
    console.log(str);

    let l_c=str.map(element=>{
        element=element.split('');
        let count=0;
        let word=[];
        for(let i=0; i<element.length; i++)
        {
            if(word.includes(element[i]))
                count++;
               else  word.push(element[i]); 
              
        }
        return count;
    });

    if(Math.max(...l_c)===0)return -1;
    let maxl=str[l_c.indexOf(Math.max(...l_c))];

    return maxl;

}
console.log(letter_c("apple even"));


// function letterRepeat(str){
//     str = str.split(' ');
//     let repeatCount=str.map(element=>{
//     let rep = 0;
//     let words=[];
//     element = element.split('');
//     for (let i = 0;i<element.length;i++){
//     if(words.includes(element[i]))rep++;
//     else words.push(element[i]);
//     }
//     return rep;
//     });
//     if(Math.max(...repeatCount)===0)return -1;
//     let maxlength= str[repeatCount.indexOf(Math.max(...repeatCount))];
//     return maxlength;
//     }
    
//     console.log(letterRepeat('the gretest day ever'))
 