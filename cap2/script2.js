const titleFilm = document.getElementById("titleFilm")
const duration = document.getElementById("duration")
const button = document.getElementById("button")
const buttonReset = document.getElementById("buttonReset")

const h2 = document.createElement("h2")
const p = document.createElement("p")
const body = document.querySelector("body")
const div = document.createElement("div")
body.appendChild(div)

div.style.backgroundColor = "#1E90FF"

const titleFimInsert = () => {
    const valueTitle = document.createTextNode(titleFilm.value)
    h2.appendChild(valueTitle)
    div.appendChild(h2)
}

const hourFilmInsert = () => {
    const valueDuration = duration.value
    const textDuration = document.createTextNode(convert(valueDuration))
    p.appendChild(textDuration)
    div.appendChild(p)
}

function convert (value)  {
    const hour = Math.floor(value / 60)
    const minute = value % 60

    const text = `${hour} horas(s) e ${minute} minuto(s)`
    return text
}

button.addEventListener("click", () => {
    titleFimInsert()
    hourFilmInsert()
})



buttonReset.addEventListener("click", () => {

})