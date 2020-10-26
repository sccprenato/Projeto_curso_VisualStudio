var valor01, valor02, resultado, operacao

function acaoBotao() {
    valor01 = prompt("Digite o Primeiro Valor: ")
operacao = prompt("Digite a Operação: Exemplo: +,-,*,/: ")
valor02 = prompt("Digite o Segundo Valor: ")
switch(operacao) {
    case "+":
        resultado = parseInt( valor01 ) + parseInt( valor02 )
        break;
    case "-":
        resultado = parseInt( valor01 ) - parseInt( valor02 )
            break;
    case "*":
        resultado = parseInt( valor01 ) * parseInt( valor02 )
        break;
    case "/":
        resultado = parseInt( valor01 ) / parseInt( valor02 )
        break;

}
document.getElementById("paragrafo").innerText = "O resultado foi: " + resultado
    
}