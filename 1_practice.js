/// Area of a triangle :--

function triArea(base,hieght) {
    return ((base*hieght)/2);
}

console.log("Area of triangle is : "+triArea(10,30));



/// Maximum edge of a triangle :--

function nextEdge(side1,side2) {
    return ((side1 + side2) - 1);
}

console.log("Next edge is : "+nextEdge(10,12));



/// Is the number less than or equal zero :--

function lessThanOrEqual(num1) {
    if (num1<=0) {
        return true ;
    }
    else{
        return false;
    }
}

console.log("Is 33 less than or equal zero : "+ lessThanOrEqual(33));


/// Basketball Points :--

function points(twoPointers,threePointers) {
    return ((twoPointers*2)+(threePointers*3));
}

console.log("Points of (3,20) : "+ points(3,20));


/// Using the "&&" Operator :--

function AND(a,b) {
    let result_1 = a && b ? "true" : "false" ;
    return result_1;
 }
 console.log("Result of true and false = "+ AND(true ,false)) ;