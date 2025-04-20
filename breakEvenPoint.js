let isPrime = n => {
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    if (n < 2) return false;
    
    for (let i = 3; i < (n ** (1/2)); i += 2)
    {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(isPrime(8));

let breakEvenPoint = (price, cf, V, cv) =>  {
    console.log(`Total variable cost (vcv) = ${V * cv}`);
    console.log(`TC = ${cf + V * cv}`);

    console.log(`Total Revenue = ${V * price}`);
    console.log(`Profit (Z) = ${V * price - (cf + V * cv)}`);
    
    console.log(`Break Even Point = ${cf / (price - cv)}`);   
}

let Z = (TotalRevenue, TC) => TotalRevenue - TC;

breakEvenPoint(0.75, 4000, 9000, 0.21);
breakEvenPoint(0.95, 4000, 5700, 0.21);
console.log(Z(5415, 5197));