

function me(str)
{
    let[l,r] = str.split("=");
    if(l.includes("x"))
    {
    for(let i = 0; i < 100; i++)
        {
          let lEquation = l.replace('x', i.toString());
          if(eval(lEquation) === eval(r))
          {
              return i;
         }
        }
} else 
{
    for(let i = 0; i < 100; i++)
    {
         let rEquation = r.replace('x', i.toString());
            if(eval(rEquation) === eval(l))
           {
            return i;
          }
    }
}
}

console.log(me("13 = 11+x")); 