let cart = document.querySelector("#cart")
let addToCart = document.querySelector("#add-to-cart")
let body = document.querySelector("body")

cart.addEventListener("click", () => {

  addToCart.style.display = "block"
})

let cross = document.querySelector("#cross")

cross.addEventListener("click", () => {

  addToCart.style.display = "none"
})

let dt = new Date()
console.log(dt.getDay())

let gsDayNames = [
  'Sun',
  'Mon',
  'Tues',
  'Wed',
  'Thur',
  'Fri',
  'Sat'
];

let months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
];

let month = months[dt.getMonth()]



let dayName = gsDayNames[dt.getDay()]
console.log(dayName)
let date = document.querySelector("#date")
date.innerHTML = `${dayName}, ${dt.getDate()}-${month}-${dt.getFullYear()}`


let cardItems = document.querySelectorAll(".card-item")
console.log(cardItems)

let itemName, itenPrice
let addToCartBtns = document.querySelectorAll(".card-item button")

var event = new Event('customEvent'); // You can replace 'customEvent' with the type of event you want

let leftdiv = document.querySelector(".left")
let rightdiv = document.querySelector(".right")
let price = document.querySelector("#price")
let title = document.querySelector("#title")


addToCartBtns.forEach((element) => {

  element.addEventListener("click", (event) => {
    console.log(element.parentNode.parentNode.childNodes);
    // console.log(event);
    // element.dispatchEvent(event);

    // Handle the event

    console.log(element.parentNode.parentNode.childNodes);



    let item = document.createElement("div")
    item.classList.add(".singleitem")
    let itemName = element.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML
    console.log(itemName);
    let itemPrice = element.parentNode.parentNode.childNodes[3].childNodes[3].innerHTML
    console.log(itemPrice)
    let addToCartDiv = document.querySelector("#add-to-cart")

    title.innerHTML = `${itemName}`
    price.innerHTML = `${itemPrice}`
    left.append(title)
    rightdiv.append(price)
    item.append(leftdiv)
    item.append(rightdiv)
    addToCartDiv.append(item)
  });

})






// let addToCartDiv = document.querySelector("#add-to-cart")

