(function (bookname) {
    var favBooks = []
    if (!(bookname.includes("Great") || bookname.includes("great")))
        favBooks.push(bookname);
    let printFavouriteBooks = () => {
        for (let i = 0; i < favBooks.length; i++) {
            console.log(`Your favourite books are: ${favBooks[i]}`);
        }
    }
    printFavouriteBooks();
})("Kafka on the shore", "");

var x = 5
{
    var x = 6;
    
}

function outer() {
    let counter = 0;
    function increment() {
        counter++;
        console.log(counter);
        if (counter == 1)
            console.log('you can\'t call me more than once')
    }
    return increment;
}
let s = 'messi';
s =     s.concat(' ronaldo');
console.log(s);
let newFunction = outer();
newFunction();
newFunction();
console.log(newFunction)
let h  = [1,9,5,7]
h.sort((a,b) =>  b - a);
console.log(h)
// arr = [0,3,0,-5,8,7,-4]
function positiveSum(arr) {
    arr = arr.filter((item) => item > 0);
    arr = arr.reduce((prev, next) => prev += next);
    return arr;
}
// console.log(positiveSum(arr))
console.log((String.fromCharCode(65 + 32)))
var num =[]
// num = num.
// split('')
// .map(item => item**2)
// .join('-');
// console.log((Number(num)))
// console.log((num))
console.log(num[0] == null)
// addFavouriteBook("Great Expectationos");
// addFavouriteBook("Kafka on the shore");
// addFavouriteBook("The Shadow of the Wind"
// var t = prompt();
// if (t % 2 == 0 && t > 2)
//     console.log('YES');
// else
//     console.log('NO');


let arr = [4, 4, 3, 2, 2, 3];
console.log(robotWalk(arr));
function robotWalk(a) {
    let max = Math.max(...a);
    let background = [];
    // 0 1 2 3 4 5
  //    [0,0,0,0,0,0]
  //    [0,0,0,0,0,0]
  //    [0,0,0,0,0,0]

    let cols = []
    for (let i = 2; i < max; i++)
      cols.push(i);
    for (let i = 0; i < max; i++)
      background[i] = cols;
    console.log(cols);
    const up = [-1, 0];
    const right = [0, 1];
    const down = [1, 0];
    const left = [0, -1];
    const movement = [up, right, down, left];
    
    
    let curPosition = [max - 1, 0]
    background[curPosition[0]][curPosition[1]] = 1;
    for(let i = 0, j = 0; i < a.length; i++)
      {
        // j to loop in movement array, i to loop in the given array
        for (let walk = 0; walk < a[i]; walk++)
          {
            curPosition[0] += movement[j][0];
            curPosition[1] += movement[j][1];
            if (background[curPosition[0]][curPosition[1]] == 1)
              return true;
            background[curPosition[0]][curPosition[1]] = 1;
          }
        if (j == 3)
          j = 0;
      }
    return false;
  }