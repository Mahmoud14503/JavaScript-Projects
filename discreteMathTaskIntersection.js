let array2 = [5, 6, 3]
let array1 = [1, 2, 3, 4]

document.write(`<div>Array1 is: ${array2}</div>`);
document.write(`<div>Array2 is: ${array1}</div>`);

if (array2.length < array1.length) {
    for (let j = 0; j < array2.length;) {
        let found = false;
        for (let i = j; i < array1.length; i++) {
            if (array2[j] === array1[i])
                found = true;
        }
        found === true ? array2.splice(j, 1) : found = false;
        // to solve the problem that .splice overwrites the array
        found === true ? j = 0 : j++;
    }
    document.write(`The diffrence is: ${array2}`);
}

if (array1.length <= array2.length) {
    for (let i = 0; i < array1.length;) {
        let found = false;
        for (let j = i; j < array2.length; j++) {
            if (array1[i] === array2[j])
                found = true;
        }
        found === false ? array1.splice(i, 1) : found = true;
        // to solve the problem that splice overwrites the array
        found === false ? i = 0 : i++;
    }
    document.write(`The intersection is: ${array1}`);
}


// same code but with the function inludes
// if (array2.length < array1.length) {
//     for (let j = 0; j < array2.length;) {
//         if (!array1.includes(array2[j])) {
//             array2.splice(j, 1);
//             j = 0;
//         }
//         else j++;
// }
//     document.write(`The intersection is: ${array2}`);
// }
