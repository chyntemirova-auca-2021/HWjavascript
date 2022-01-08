let first_number = Number(prompt("1 число:"))
let operator     = prompt("действие :")
let second_number= Number(prompt("2 число "))

if (operator === "-") {
    alert(first_number - second_number)
} else if ( operator === "+") {
    alert(first_number + second_number)
} else if (operator === "*") {
    alert(first_number * second_number)
} else if (operator === "/") {
    alert(first_number / second_number)
} else if (operator === "%") {
    alert (first_number % second_number)
} else {
    alert("error")
}