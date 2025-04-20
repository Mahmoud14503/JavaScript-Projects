let array1 = ["A", 1.1, "B", 2.1]
let array2 = ["a", 1.2, "b", 2.2]
let array3 = []

for (let i = 0, k = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        array3[k] = `(${array1[i] + " , " + array2[j]})`;
        k++;
    }
}

console.log(array3)