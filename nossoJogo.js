/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Boas vindas ao jogo de BlackJack!")

let carta1Jogador = comprarCarta()
let carta2Jogador = comprarCarta()
let carta1Jogadorpc = comprarCarta()
let carta2Jogadorpc = comprarCarta()

let jogador = carta1Jogador.valor + carta2Jogador.valor
let jogadorPc = carta1Jogadorpc.valor + carta2Jogador.valor


if (confirm(" Quer iniciar um nova jogada? ")) {
   console.log(`Jogador cartas ${carta1Jogador.texto} , ${carta2Jogador.texto} , ${jogador}`)
   console.log(`Computador cartas ${carta1Jogadorpc.texto}, ${carta2Jogadorpc.texto}, ${jogadorPc}`)

   if (jogador > jogadorPc) {
      console.log("Jogador ganhou!!!!")
   } else if (jogador == jogadorPc) {
      console.log("Vc empatou!!!!")
   } else if (jogador < jogadorPc) {
      console.log("Computador ganhou!!!")
   }
}
else {
   console.log("Jogo acabou")
}
