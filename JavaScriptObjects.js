let car =  {
    brand: "mercedes",
    year: 2018,
    color: {
        firstColor: "white",
        secondColor: "black",
        getFirstColor: _ => car.color.firstColor,
        getSecondColor: _ => car.color.secondColor,
    },

    setYear: function(x) {
        car.year = x;
    },
    getYear: function() {
        return car.year;
    }   
}
let car2 = new Object({
    brand: "Audi",
}
);

let car3 = Object.create(car);
let car4 = Object.assign(car);

console.log(car.brand);
// car2.brand = "BMV"
console.log(car2.brand)
console.log(car3)
