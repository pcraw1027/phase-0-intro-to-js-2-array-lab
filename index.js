// Write your solution here!
const cats = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendCat() {
  cats.push("Ralph")
}

function destructivelyPrependCat() {
  cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

let newCat = "Broom";
function appendCat(newCat) {
  const newArray = [...cats, newCat];
  return newArray
}

let newCat2 = "Arnold";
function prependCat(newCat) {
  const newArray =[newCat2,...cats];
  return newArray
}

function removeLastCat() {
  const newArray = cats.slice(0,cats.length -1)
  return newArray
}

function removeFirstCat() {
  const newArray = cats.slice(1)
  return newArray
}