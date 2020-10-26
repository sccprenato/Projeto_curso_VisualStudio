

var valor01, valor02, resultado, operacao

function acaoBotao() {
    valor01 = prompt("Digite o Primeiro Valor: ")
operacao = prompt("Digite a Operação: Exemplo: +,-,*,/: ")
valor02 = prompt("Digite o Segundo Valor: ")

if (operacao == "+" ) {
    resultado = parseInt( valor01 ) + parseInt( valor02 ) 
}else if (operacao == "-"){
    resultado = parseInt( valor01 ) - parseInt( valor02 )
}else if (operacao == "*"){
    resultado = parseInt( valor01 ) * parseInt( valor02 )
}else if (operacao == "/"){
    resultado = parseInt( valor01 ) / parseInt( valor02 )
}

document.getElementById("paragrafo").innerText = "O resultado foi: " + resultado
    
}

