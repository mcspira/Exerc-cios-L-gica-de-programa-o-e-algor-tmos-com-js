const inputPrice = document.getElementById("inputPrice")
const confirmBtn = document.getElementById("confirmBtn")

const textTime = document.getElementById("textTime")
const textChange = document.getElementById("textChange")


const timeMin = 30
const valorMin = 1.00

const timeMed = 60
const valorMed = 1.75

const timeMax = 120
const valorMax = 3.00

const calc = (inputPriceValue, valuePrice) => {
    const input = inputPriceValue.toFixed(2)
    const value = valuePrice
    const calc = input - value

    const formated = `Troco R$: ${calc.toFixed(2)}`
    return textChange.textContent = formated
}


confirmBtn.addEventListener("click", () => {
    const inputPriceValue = parseFloat(inputPrice.value)

    console.log (inputPriceValue > valorMax)

    if (!isNaN(inputPriceValue)) {
        if (inputPriceValue < valorMin) {
            textTime.textContent = "Valor insuficiente"
    
        } 
        else if (inputPriceValue >= valorMin && inputPriceValue < valorMed) {
            textTime.textContent = `Tempo: ${timeMin} minutos.`
            calc(inputPriceValue, valorMin)
        }
    
         else if (inputPriceValue >= valorMed && inputPriceValue < valorMax) {
            textTime.textContent = `Tempo: ${timeMed} minutos.`
            calc(inputPriceValue, valorMed)
        } 
    
        else if (inputPriceValue == valorMax) {
            textTime.textContent = `Tempo: ${timeMax} minutos.`
            calc(inputPriceValue, valorMax)
        } 
    
        else if (inputPriceValue > valorMax) {
            textTime.textContent = "O máximo é de 120 minutos."
        }
    } else {
        alert("Insira um valor válido!")
    }
})