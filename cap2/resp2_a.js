const inputMedication = document.getElementById("inputMedication")
const inputPrice = document.getElementById("inputPrice")
const button= document.getElementById("button")
const textShow = document.getElementById("textShow")
const promotion = document.getElementById("promotion")


const showMedication = () => {
    const inputValue = inputMedication.value
    const inputText = `Promoção de ${inputValue}`
    promotion.textContent = inputText
}

const showPrice = () => {
    const inputValue = inputPrice.value
    const inputText = `Leve 2 por R$${Math.floor(inputValue)} cada`
    textShow.textContent = inputText
}

button.addEventListener("click", () => {
    showMedication()
    showPrice()
})