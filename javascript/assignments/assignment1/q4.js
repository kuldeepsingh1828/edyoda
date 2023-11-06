// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.

// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

function findTriangle(side1, side2, side3) {
    if (side1 == side2 && side2 == side3) {
        console.log("Equilateral")
    } else if (side1 != side2 && side2 != side3 && side1 != side3) {
        console.log("Scalen triangle")
    } else {
        console.log("Isosceles triangle")
    }
}
findTriangle(1, 1, 1);
findTriangle(1, 13, 1);
findTriangle(13, 12, 11);