document.addEventListener("DOMContentLoaded", run)

function run () {
    const btn = document.getElementById("plusButton")
    btn.addEventListener("click", mySum)
}

    function mySum(){
        const numberOne = document.querySelector("#input1")
        const numberTwo = document.querySelector("#input2")
        let result = Number (numberOne.value) + Number(numberTwo.value)
        const resultNode = document.getElementById("myRes")
        resultNode.textContent = result
    }

    function myMinus(){
        const numberOne = document.querySelector("#input1")
        const numberTwo = document.querySelector("#input2")
        let result = Number (numberOne.value) - Number(numberTwo.value)
        const resultNode = document.getElementById("myRes")
        resultNode.textContent = result
    }

    function myDiv(){
        const numberOne = document.querySelector("#input1")
        const numberTwo = document.querySelector("#input2")
        let result = Number (numberOne.value) / Number(numberTwo.value)
        const resultNode = document.getElementById("myRes")
        resultNode.textContent = result
    }
    function myMulti(){
        const numberOne = document.querySelector("#input1")
        const numberTwo = document.querySelector("#input2")
        let result = Number (numberOne.value) * Number(numberTwo.value)
        const resultNode = document.getElementById("myRes")
        resultNode.textContent = result
    }
    function myPow(){
        const numberOne = document.querySelector("#input1")
        const numberTwo = document.querySelector("#input2")
        let result = Number (numberOne.value) ^ Number(numberTwo.value)
        const resultNode = document.getElementById("myRes")
        resultNode.textContent = result
    }

