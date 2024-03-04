function missdigit(str) {
    let [left, right] = str.split("=");
    if (left.includes("x")) {
        for (let i = 0; i < 100; i++) {
            let lEquation = left.replace("x", i.toString())
            if (eval(lEquation) === parseInt(right)) { return i };
        }
    }
    else {
        for (let i = 0; i < 100; i++) {
            let rEquation = right.replace("x", i.toString());
            if (eval(rEquation) === parseInt(left)) { return i };
        }
    }
}
console.log(missdigit("10+x=15"))

function bodmas(str)
{
    let res=eval(str);
    return res;
}
console.log(bodmas("100/2"))