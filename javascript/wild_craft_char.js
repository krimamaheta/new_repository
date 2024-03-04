//Wildcraft Character
function WildcardCharacters(str) {
    let [str1, str2] = str.split(' ');

    str2 = str2.split('');
    str2.unshift(' ');
    str2 = str2.join('');

    let str2Index = 1;
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === '{') {
            i = i + 2;
            continue;
        }
        if (str1[i] === '+') {
            if (str2[str2Index] === str2[str2Index + 1] || str2[str2Index] === str2[str2Index - 1]) return 'false';
            // else str2Index++;
            str2Index++;
            continue;
        }
        if (str1[i] === '*') {
            let checkindex = 3;
            // const isCheckIndex = false;
            if (str1[i + 1] === '{')
                checkindex = Number(str1[i + 2]);
            if (str2[str2Index] === str2[str2Index - 1])
                return 'false';
                
            const checkWith = str2[str2Index];
            str2Index++;

            for (let j = 1; j < checkindex; j++, str2Index++) {
                if (checkWith !== str2[str2Index])
                    return 'false';
            }
        }
    }
    if (str2Index !== str2.length) return 'false';
    return 'true';
}

console.log(WildcardCharacters('++*{5} gheeeee')); // true
console.log(WildcardCharacters('++*{1} gheeeee')); // true
console.log(WildcardCharacters('+++++* abcdemmmmmm')); // false
console.log(WildcardCharacters('**+*{2} mmmrrrkbb')); // truet