//POINTS TO REMEMBER-
//Values declared inside the scope should not be accessible outside the scope.
//But the variable declared outside the score or globally can be accessible inside the scope

// But if we use var then Values declared inside the scope
// will be accessible outside the scope which will be a problem.
//So it is always recommended to not use var instead use let,const.
let b = 20;
if (true) {
  var a = 50;
  let b = 30;
  console.log("Inner ", b);
}

console.log("Outer ", b);
console.log(
  `This ${a} is declared inside the scope but it is accessible outside the scope too which should be avoided as var is used`
);
