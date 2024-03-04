

function permutation(people)
{

    let result=[];

    if(people.length===0) return [];
    if(people.length===1) return [people];

    
    for(let i=0; i<people.length; i++)
    {
        const currentPeople=people[i];
        const remainPeople=people.splice(0,i).concat(people.slice(i+1));

        const permutateRemain=permutation(remainPeople);
        for(let j=0; j<permutateRemain.length; j++)
        {
            let res=[currentPeople].concat(permutateRemain[j]);
            result.push(res);
        }
    }
    return result;
}

function checkrelation(relation,conditions)
{
    for(let i=0; i<conditions.length; i++)
    {
        let [p1,condition,p2]=conditions[i].split('');

        if(condition==='<')
        [p1,p2]=[p2,p1]
        
        let i1=relation.indexOf(p1);
        let i2=relation.indexOf(p2);
        if(i1<=i2)return false;
      }
      return true;
}


function lineorder(strArr)
{
    let people=[];
    //map taken each value one by one
    strArr.map(element=>{
        let [person1,condition,person2]=element.split('');
        people.push(person1,person2);
    });

    people=[...new Set(people)];

    let permutationpeople=permutation([...people]);
    let truePair=[];

    permutationpeople.forEach(element => {
    const isvalid=checkrelation(element,strArr);
    if(isvalid) truePair.push(element);        
    });

    return truePair.length;
}
console.log(lineorder(["J>B", "B<S", "D>J"]))