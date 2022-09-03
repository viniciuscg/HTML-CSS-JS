document.getElementById("texto").innerHTML= " Meu texto <b>JS</b>! " ;
console.log("Usando console.log");

function clicou() {
    window.alert('Você clicou!')
}
function inicio() {
    let nome = window.prompt('Digite seu nome:')
    window.alert(`Olá, ${nome}! É um prazer te conhecer!`)
}
function inicio2() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = window.document.getElementById('resultado')

    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer!`
}
function calcular() {
    let n1 = Number(window.prompt('Digite um número: '))
    let res = document.querySelector('section#res')

    res.innerHTML = `<p>O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!</p>`
}
function somar() {
    let s1 = Number(window.prompt('Digite um número: '))
    let s2 = Number(window.prompt('Digite outro número:'))
    resoma = s1 + s2

    let res = document.querySelector('section#resoma')
    res.innerHTML = `<p>A soma entre <mark>${s1}</mark> e <mark>${s2}</mark> é igual a <strong>${resoma}</strong>!</p>`
}  
function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2 

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
}
var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}
const btn$ = document.getElementById("btn_incrementar")
const btnde$ = document.getElementById("btn_decrementar")
const p$ = document.getElementById("btn_incrementar")

let contador = 0;

p$.innerHTML = contador;

btn$.addEventListener('click', function(){
    contador++;

    p$.innerHTML = contador;

});
btnde$.addEventListener('click', function(){
    
    p$.innerHTML = --contador;

});
console.log(btn$)
console.log(p$)