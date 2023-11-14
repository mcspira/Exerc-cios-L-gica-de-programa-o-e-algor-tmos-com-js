const inputPrice = document.getElementById("inputPrice")
const inputTime = document.getElementById("inputTime")
const buttonCalc = document.getElementById("buttonCalc")
const showPrice = document.getElementById("showPrice")

const calc = () => { 
    const inputValuePrice = inputPrice.value
    const inputValueTime = inputTime.value 
    const inputCalc = inputValuePrice * Math.ceil(inputValueTime / 15)
    const inputFormat = `Valor a pagar R$: ${inputCalc}`
    const inputTextPrice = inputFormat
    showPrice.textContent = inputTextPrice
}

buttonCalc.addEventListener("click", () => {
    calc()
})

