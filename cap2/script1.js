const title = document.getElementById("title")
const input = document.getElementById("input")
const button = document.getElementById("button")


button.addEventListener("click", () => {
    const valueInput = input.value
    title.textContent = valueInput
})

