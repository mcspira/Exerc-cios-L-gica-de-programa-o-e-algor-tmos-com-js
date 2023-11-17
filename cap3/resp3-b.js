const inputLimitSpeed = document.getElementById("inputLimitSpeed")
const inputSpeedConductor = document.getElementById("inputSpeedConductor")
const verifyBtn = document.getElementById("verifyBtn")
const infoText = document.getElementById("infoText")

const inLimitSpeed = () => {
   const a =  infoText.textContent = `Situação: Sem Multa`
   return a
}

const outLimitSpeed = () => {
    const a = infoText.textContent = `Situação: Multa leve`
    return a
}

const veryOutLimitSpeed = () => {
    const a = infoText.textContent = `Situação: Multa grave` 
    return a
}

verifyBtn.addEventListener("click", () => {
    const limitSpeed = parseFloat(inputLimitSpeed.value)
    const SpeedConductor = parseFloat(inputSpeedConductor.value)

    const speed20 = limitSpeed + (limitSpeed *0.2)

    if (!isNaN(limitSpeed) && !isNaN(SpeedConductor)) {
       
        if(SpeedConductor <= limitSpeed) {
            inLimitSpeed()
        } else if (SpeedConductor > limitSpeed && SpeedConductor <= speed20 ){
            outLimitSpeed()
        } else {
            veryOutLimitSpeed()
        }
    } else {
        alert("Insira um número válido!")
    }
})