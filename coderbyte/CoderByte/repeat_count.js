//return gretest repetative str

function gretestnum(str)
{
    str=str.split(' ');
    console.log(str);

    let repeatcount=str.map(element=>{
        let rep=0;
        let word=[];
        // element=element.split('');
        for(let i=0; i<element.length; i++)
        {
            if(word.includes(element[i]))
            {
                rep++;
            }
            else
            {
                word.push(element[i]);
            }
        }
        return rep;
    });
    if(Math.max(...repeatcount)===0)return -1;
    let maxlength=str[repeatcount.indexOf(Math.max(...repeatcount))];
   return  maxlength;
   
}
console.log(gretestnum('hello world'));

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
    
//     console.log(letterRepeat('hello world'));

