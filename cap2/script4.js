const inputBuffet = document.getElementById("inputBuffet")
const inputConsumption = document.getElementById("inputConsumption")
const button = document.getElementById("button")
const p = document.getElementById("price")
const body = document.querySelector("body")

const calcPrice = () => {
    const inputBuffetValue = inputBuffet.value
    const inputConsumptionValue = inputConsumption.value

    const result =  `Valor a pagar R$: ${((inputConsumptionValue / 1000) * inputBuffetValue).toFixed(2)}`

    p.textContent = result
}

button.addEventListener("click", () => {
    calcPrice()
})