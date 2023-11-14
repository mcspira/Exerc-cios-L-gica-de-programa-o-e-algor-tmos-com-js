const inputProduct = document.getElementById("inputProduct")
const inputPrice = document.getElementById("inputPrice")
const seePromotionBtn = document.getElementById("seePromotionBtn")
const textPromotion = document.getElementById("textPromotion")
const descPromotion = document.getElementById("descPromotion")

// HELL FUNCTION ----

const inputCalc = () => {
    const inputValuePrice = inputPrice.value
    const inputCalcDesc = (inputValuePrice / 2)
    const inputCalcPrice = inputValuePrice * 2 + inputCalcDesc
    return inputCalcPrice
}

const textFormatItems = () => {
    const inputValueProduct = inputProduct.value
    const inputFormat = `${inputValueProduct} - Promoção: Leve 3 por R$: ${inputCalc()}`
    return inputFormat
}

const textFormatItem = () => {
    const inputValuePrice = inputPrice.value
    const inputCalcDesc = (inputValuePrice / 2)
    const inputFormatText = `O 3° produto custa apenas R$: ${inputCalcDesc}`
    return inputFormatText
}

seePromotionBtn.addEventListener("click", () => {
    textPromotion.textContent = textFormatItems()
    descPromotion.textContent = textFormatItem()
})
