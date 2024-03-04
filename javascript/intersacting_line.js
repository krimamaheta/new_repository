/**
 * Using the JavaScript language, have the function intersectingLines(strArr)
 * take strArr which will be an array of 4 coordinates in the form: (x,y). Your
 * program should take these points where the first 2 form a line and the last 2
 * form a line, and determine whether the lines intersect, and if they do, at
 * what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"],
 * then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3)
 * intersect at (9/5,12/5). Your output should therefore be the 2 points in
 * fraction form in the following format: (9/5,12/5). If there is no denominator
 * for the resulting points, then the output should just be the integers like
 * so: (12,3). If any of the resulting points is negative, add the negative sign
 * to the numerator like so: (-491/63,-491/67). If there is no intersection,
 * your output should return the string "no intersection". The input points and
 * the resulting points can be positive or negative integers.
 */
function intersectingLines(strArr) {
    function parsePoint(pointStr) {
      const [x, y] = pointStr.slice(1, -1).split(',').map(Number);
      return { x, y };
    }
  
    const point1 = parsePoint(strArr[0]);
    const point2 = parsePoint(strArr[1]);
    const point3 = parsePoint(strArr[2]);
    const point4 = parsePoint(strArr[3]);
  
    const slope1 = (point2.y - point1.y) / (point2.x - point1.x);
    const slope2 = (point4.y - point3.y) / (point4.x - point3.x);
  
    if (slope1 === slope2) {
      return "no intersection";
    }
  
    const yIntercept1 = point1.y - slope1 * point1.x;
    const yIntercept2 = point3.y - slope2 * point3.x;
  
    const intersectionX = (yIntercept2 - yIntercept1) / (slope1 - slope2);
    const intersectionY = slope1 * intersectionX + yIntercept1;
  
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
  
    const xDenominator = lcm(Math.abs(point2.x - point1.x), Math.abs(point4.x - point3.x));
    const yDenominator = lcm(Math.abs(point2.y - point1.y), Math.abs(point4.y - point3.y));
  
    const intersectionXFraction = `${intersectionX * xDenominator}/${xDenominator}`;
    const intersectionYFraction = `${intersectionY * yDenominator}/${yDenominator}`;
  
    return `(${intersectionXFraction},${intersectionYFraction})`;
  }
  
  // Example usage:
  const input = ["(3,0)","(1,4)","(0,-3)","(2,3)"];
  const output = intersectingLines(input);