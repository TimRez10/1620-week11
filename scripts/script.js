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

// const circle = (circleRadius) => {
//     let area = Math.PI * circleRadius ** 2;
//     return area.toFixed(2);
// }

// let findArea = prompt("Enter the radius");
// alert(`The area of a circle with radius ${findArea} is ${circle(findArea)}`);

// let radiusPara = document.querySelector('#radius');
// radiusPara.textContent += ': ' + findArea

// let resultPara = document.querySelector('#result');
// resultPara.textContent += ': ' + circle(findArea)


let shopItems = ["cheese","bread","green pepper"];
const shoppingListElement = document.querySelector(".shopping")

const createItem = (shoppingItem) => {
    for (let item of shoppingItem) {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        shoppingListElement.appendChild(listItem);
    }
}
createItem(shopItems);

function changeListStyle () {
    shoppingListElement.classList.remove("circleList");
    shoppingListElement.classList.add("squareList");
}

changeListStyle();

function makeGreen () {
    const allListItems = document.querySelectorAll(".shopping li");
    for (let i of allListItems) {
        if (i.textContent.includes("green")) {
            i.classList.add("greenItems")
        }
    }
}
makeGreen()