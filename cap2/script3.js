console.time("time")
const h1 = document.createElement("h1")
const label1 = document.createElement("label")
const label2 = document.createElement("label")
const input1 = document.createElement("input")
const input2 = document.createElement("input")
const button = document.createElement("button")
const div = document.createElement("div")
const div2 = document.createElement("div")
const body = document.querySelector("body")
const br = document.createElement("br")
const br2 = document.createElement("br")

const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")


body.appendChild(div)
body.appendChild(div2)
div2.appendChild(p1)
div2.appendChild(p2)
div.appendChild(h1)
div.appendChild(label1)
div.appendChild(input1)
div.appendChild(br)
div.appendChild(label2)
div.appendChild(input2)
div.appendChild(br2)
div.appendChild(button)


h1.textContent = "Revenda de Veículos JS"
label1.textContent = "Veiculo: "
label2.textContent = "Preço R$: "
button.textContent = "Ver Promoção"

const vehicle = () => {
    const vehicleValue = input1.value
    const vehicleTextFormated = `Promoção: ${vehicleValue}`
    const vehicleText = document.createTextNode(vehicleTextFormated)
    p1.appendChild(vehicleText)
}


const promotion = () => {
    const promotionValue = input2.value
    const entrie = `
    Entrada de: R$${promotionValue / 2} \n
    + 12X de: R$${Math.floor(promotionValue / 12)}
    `
    const promotionText = document.createTextNode(entrie)
    p2.appendChild(promotionText)
}

button.addEventListener("click", () => {
    vehicle()
    promotion()
})
console.timeEnd("time")