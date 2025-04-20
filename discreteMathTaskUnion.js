// #include <iostream>
//  LOL :)

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 3];
let sumLength = array1.length + array2.length;

// Concanitaing :

// for (let i = array1.length, j = 0; i < sumLength; i++, j++) {
//     array1[i] = array2[j];
// }

array1 = array1.concat(array2);
console.log(array1);


// SHIFTING AND DELEATING :

// the original C++ code
// for (let i = 0; i < array1.length; i++)
// {
//     for (let j = i + 1; j < array1.length; j++)
//     {
//         if (array1[i] == array1[j])
//         {
//             for (let k = i; k < array1.length - 1; k++)
//             {
//                 array1[k] = array1[k + 1];
//             }
//             array1.length--; => array1.pop();
//         }
        
//     }
    
// }

// a function that replaces the loop that splits the array
// for (let i = 0; i < array1.length; i++)
// {
//     for (let j = i + 1; j < array1.length; j++)
//     {
//         if (array1[i] == array1[j])
//         {
//             array1.splice(i, 1)
//         }
        
//     }
    
// }

// a function that replaces the loop that searches over the array
for (let i = 0; i < array1.length; i++)
{
        if (array1[i] === array1[array1.indexOf(array1[i], i + 1, )])
        {
            array1.splice(i, 1)
        }
        
}

console.log(array1);

