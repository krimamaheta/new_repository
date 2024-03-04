function me(str) {
    let [left, right] = str.split("=");

    if (left.includes('x'))
     {
        for (let i = 0; i <= 10000; i++) {
            let leftEval = left.replace('x', i.toString());
            if (eval(leftEval) == eval(right)) {
                return i;
            }
        }
    } else {
        for (let i = 0; i <= 10000; i++) {
          let   rightEval = right.replace('x', i.toString());
            if (eval(left) == eval(rightEval)) {
                return i;
            }
        }
    }


}


console.log(me("x + 14 = 24"));
