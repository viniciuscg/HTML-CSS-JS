const nome = document.getElementById("nome")

function enviar(){
    confirm(`Tem Certeza, ${nome.value}?`)
}
function comprar(){
    confirm(`O produto foi adicionado ao seu carrinho, ${nome.value}`)
}