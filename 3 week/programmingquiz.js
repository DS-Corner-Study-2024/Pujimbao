//1번
const numbers = [10, 20, 30, 40, 50];

numbers.forEach((number) => {
    console.log(number);
});

//2번
const car = {
    brand: "Tesla",
    model: "S",
    batteryLevel: 85,
    provideInfo() {
        return `This is a ${this.brand} ${this.model}, and the battery level is at ${this.batteryLevel}%.`
    }
};

console.log(car.provideInfo());