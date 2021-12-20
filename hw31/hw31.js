let numbers = []
let numbers2 = []

let a = Number(prompt("Number 1: "))
let b = Number(prompt("Number 2: "))
let c = Number(prompt("Number 3: "))
let d = Number(prompt("Number 4: "))
let e = Number(prompt("Number 5: "))
let f = Number(prompt("Number 6: "))
let g = Number(prompt("Number 7: "))

if ( a % 2 === 0) {
numbers.push(a)
} 
if ( b % 2 === 0) {
    numbers.push(b)
}
if ( c % 2 === 0) {
    numbers.push(c)
}
if ( d % 2 === 0) {
    numbers.push(d)
}
if ( e % 2 === 0) {
    numbers.push(e)
}
if ( f % 2 === 0) {
    numbers.push(f)
}
if ( g % 2 === 0) {
    numbers.push(g)
} 


if ( a % 3 === 0) {
    numbers2.push(a)
}
if ( b % 3 === 0) {
    numbers2.push(b)
}

if ( c % 3 === 0) {
    numbers2.push(c)
}

if ( d % 3 === 0) {
    numbers2.push(d)
}

if ( e % 3 === 0) {
    numbers2.push(e)
}

if ( f % 3 === 0) {
    numbers2.push(f)
}

if ( g % 3 === 0) {
    numbers2.push(g)
}

 
console.log(numbers)
console.log(numbers2)
