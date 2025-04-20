let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 3];

array1 = array1.concat(array2);
console.log(array1);

// for (let i = 0; i < array1.length; i++)
// {
//         if (array1[i] === array1[array1.indexOf(array1[i], i + 1, )])
//         {
//             array1.splice(i, 1)
//         }
        
// }

array1.map((ele, i, arr) => {
    if (ele === arr[arr.indexOf(ele, i + 1, )])
    {
        arr.splice(i, 1)
    }
});

console.log(array1);
