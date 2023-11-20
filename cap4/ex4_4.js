do {
    alert("|Digite 0 para sair|")
    const num = Number(prompt("Digite um número."))
    if(num === 0 || isNaN(num)) {
        const sair = confirm("Confirma saída")
        if(sair){
            break
        } else {
            continue
        }
    } else {
        if(num % 2 == 0) {
            alert(`O dobro de ${num} é: ${num * 2}`)
        } else {
            alert(`O tríplo de ${num} é: ${num * 3}`)
        }
    }
} while (true)

alert("Para realizar mais cálculos, f5 na página.")