const inputNumber = document.getElementById("inputNumber")
const numberBtn = document.getElementById("numberBtn")
const textInsert = document.getElementById("textInsert")

const decresc = (n) => {
    let number = ''
    let i

    for(i = n; i > 0; i--){
          number += `${i}, ` 

    }

    textInsert.textContent = `Entre ${n} e 1: ${number}`
}

numberBtn.addEventListener("click", () => {
    const inputNumberValue = inputNumber.value
    if(inputNumberValue === 0 || isNaN(inputNumberValue)) {
        alert("Insira um número válido")
    } else {
        decresc(inputNumberValue)
    }
})