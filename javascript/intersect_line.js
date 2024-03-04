// /**
//  * Using the JavaScript language, have the function intersectingLines(strArr)
//  * take strArr which will be an array of 4 coordinates in the form: (x,y). Your
//  * program should take these points where the first 2 form a line and the last 2
//  * form a line, and determine whether the lines intersect, and if they do, at
//  * what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"],
//  * then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3)
//  * intersect at (9/5,12/5). Your output should therefore be the 2 points in
//  * fraction form in the following format: (9/5,12/5). If there is no denominator
//  * for the resulting points, then the output should just be the integers like
//  * so: (12,3). If any of the resulting points is negative, add the negative sign
//  * to the numerator like so: (-491/63,-491/67). If there is no intersection,
//  * your output should return the string "no intersection". The input points and
//  * the resulting points can be positive or negative integers.

function intersect_line(arr)
{
    const parsev=(point)=>{
        const [x,y]=point.match(/-?\d+/g).map(Number);
        return {x:y};
    };
    const point1=parsev(arr[0]);
    const point2=parsev(arr[1]);
    const point3=parsev(arr[2]);
    const point4=parsev(arr[3]);
    console.log(point1,point2,point3,point4);

    const slope1=(point2.y-point1.y)/point2.x-point1.x;
    const slope2=(point4.y-point3.y)/point4.x-point3.y;
    console.log(slope1,slope2);


    //same slope so that no itersaction
    if(slope1===slope2) return "no intersection";

    //calculate intewrsaction point
    const x=(slope1*point1.x-slope2*point3.x+point3.y-point1.y)/(slope1-slope2);
    const y=slope1*(x-point1.x)+point1.y;


    //formate the result in as fraction or as an integer
    const fractionx=`${Math.abs(x%1===0?x:x.toFixed(5))}`;
    const fractiony=`${Math.abs(y%1===0?y:y.toFixed(5))}`;

    return `(${fractionx}${fractiony})`;
}
console.log(intersect_line(["(3,0)","(1,4)","(0,-3)","(2,3)"]));
