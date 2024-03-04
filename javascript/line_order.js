function permutation(people) {
    let result = [];
    if (people.length === 0) return [];
    if (people.length === 1) return [people];
    for (let i = 0; i < people.length; i++) {
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
    function checkRelation(relation, conditions) {
    
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
    function lineOrdering(strArr) {
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