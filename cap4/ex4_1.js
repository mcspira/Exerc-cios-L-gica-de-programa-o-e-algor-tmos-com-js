
const inputNumber = document.getElementById("inputNumber")
const showTableBtn = document.getElementById("showTableBtn")
const result = document.getElementById("result")
const br = document.getElementById("br")

const multiplication = (n) => {
    let response = []
    let i 
    for(i = 1; i < 11; i++ ) {
        result.innerHTML = response += `${n} X ${i} = ${n * i}  `+ "<br />"
    }
    return console.log(result)
}


showTableBtn.addEventListener("click", () => {
    const inputNumberValue = inputNumber.value
    if (inputNumberValue === 0 || isNaN(inputNumberValue)) {
        alert("Insira um número válido")
    } else {
        multiplication(inputNumberValue)
    }
})