//* Using the JavaScript language, have the function lineOrdering(strArr) read
//  * the strArr parameter being passed which will represent the relations among
// * people standing in a line. The structure of the input will be
// * ["A>B","B>C","A<D",etc..]. The letters stand for different people and the
// * greater than and less than signs stand for a person being in front of someone
// * or behind someone. A>B means A is in front of B and B<C means that B is
// * behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are
// * the following ways you can arrange the people in line: DSJB, SDJB and DJSB.
// * Your program will determine the number of ways people can be arranged in
// * line. So for this example your program should return the number 3. It also
// * may be the case that the relations produce an impossible line ordering,
// * resulting in zero as the answer.
// *
// * Only the symbols <, >, and the uppercase letters A...Z will be used. The
// * maximum number of relations strArr will contain is ten.

function permutation(people) 
{
    let result = [];
    if (people.length === 0) return [];
    if (people.length === 1) return [people];
    for (let i = 0; i < people.length; i++) 
    {
    const currentPeople = people[i];
    const remainPeople = people.slice(0, i).concat(people.slice(i + 1));
    
    const permutateRemain = permutation(remainPeople);
    for (let j = 0; j < permutateRemain.length; j++) {
    let res = [currentPeople].concat(permutateRemain[j]);
    result.push(res);
    }
    }
    return result;
    }
    function checkRelation(relation, conditions) 
    {
    
    for (let i = 0; i < conditions.length; i++) {
    let [person1, condition, person2] = conditions[i].split('');
    if (condition === '<')
    [person1, person2] = [person2, person1];
    let ind1 = relation.indexOf(person1);
    let ind2 = relation.indexOf(person2);
    if (ind1 <= ind2) return false;
    }
    return true;
    }
    function lineOrdering(strArr)
     {
    // let people = Array.from(new Set(strArr.join(',').match(/[A-Z]+/g)));
    let people = [];

    strArr.map(element => {
    let [personA, condition, personB] = element.split('');
    people.push(personA, personB);
    });


    people = [...new Set(people)];
    let permutationPeople = permutation([...people]);
    let truePair = [];
    
    permutationPeople.forEach(element => {
    const isValid = checkRelation(element, strArr)
    if (isValid) truePair.push(element);
    });
    return truePair.length;
    }
    console.log(lineOrdering(["J>B", "B<S", "D>J"]));