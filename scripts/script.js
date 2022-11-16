// const greet = (userName) => {
//     console.log(`Hello ${userName}`);
//     return "123"
// }
// greet("Timur");
// greet("Na");
// greet(greet("Timur"));
// greet(4223);

// const greet = (userName = 'user', time = 'day') => {
//     console.log(`Good ${time}, ${userName}`);
// }
// greet("Timur", "Night", "Dinner");
// greet();

const circle = (circleRadius) => {
    let area = 2 * Math.PI * circleRadius
    return area.toFixed(2)
}

let findArea = prompt("Enter the radius")
alert(`The area of a circle is ${circle(findArea)}`)