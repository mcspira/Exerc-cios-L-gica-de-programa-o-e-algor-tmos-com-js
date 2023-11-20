const text = document.getElementById("text")


do {
    var num = Number(prompt("Número: ")); 
    if (num == 0 || isNaN(num)) 
    { alert("Digite um número válido..."); } 

} while (num == 0 || isNaN(num));
let number = ''
do {
    
    text.textContent = number += num++
    console.log(number)
} while (num <= 10)