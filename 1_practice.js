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
