const inputNumber = document.getElementById("inputNumber")
const resultBtn = document.getElementById("resultBtn")
const resultText = document.getElementById("resultText")



const par = (inputNumber) => {
    const par = `O número ${inputNumber} é par.`
    return  resultText.textContent = par
}

const impar = (inputNumber) => {
    const impar = `O número ${inputNumber} é impar.`
    return  resultText.textContent = impar
}

resultBtn.addEventListener("click", () => {
    const inputValue = inputNumber.value

    if (!isNaN(inputValue)) {
        if(inputValue % 2 == 0) {
            par(inputValue)
        } else {
            impar(inputValue)
        }
    } else {
        alert("Digite um valor válido.").inputNumber.focus()
    }
})

