function showDetails(a, b, c) {
    let v1, v2, v3;
    typeof a === "string" ? v1 = a : (typeof a === "number" ? v2 = a : v3 = a);
    typeof b === "string" ? v1 = b : (typeof b === "number" ? v2 = b : v3 = b);
    typeof c === "string" ? v1 = c : (typeof c === "number" ? v2 = c : v3 = c);
    v3 == true ? console.log(`Hello ${v1}, Your age is ${v2}, You are available for hire`) : console.log(`Hello ${v1}, Your age is ${v2}, You are not available for hire`);
}

showDetails(false, 19, "hoda");
showDetails(18, true, "hoda");

// let a = typeof 5;
// typeof 5 === "number" ? console.log("yes") : console.log("not"); 

