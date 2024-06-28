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



 /// Bolean to string conversion :--

function boleanToString(flag) {
    if (flag == true) {
      return "True";
    } else {
      return "False";
    }
  }
  
  console.log(boleanToString(false));


  /// profitable gample solution :--

function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(profitableGamble(0.2, 12, 20));


  // Compare Strings by Count of Characters :--

function Compare(str1, st2) {
    if (str1 == st2) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(Compare("EUro", "CUp"));


  /// Movie Theatre Admittance :--

function Admittance(age, Supervision) {
    if (age >= 15 && Supervision == true) {
      return true;
    } else {
      return false;
    }
  }
  console.log(Admittance(19, true));