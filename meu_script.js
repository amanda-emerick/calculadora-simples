var display1 = document.getElementById('resultado')
var display2 = document.getElementById('resultado2');
      
function calcular(tipo, valor) {
       
    if (tipo === 'acao') {
 
        switch (valor) {
            
        case 'c':
        // limpa os visores de resultado
        display1.value = ''
        display2.value = ''
        break

        case '.':
                         
        var tamanho = display1.value.length
             
            if (display1.value.includes('.') == true) {
            var ultimoPonto = display1.value.lastIndexOf('.') + 1
                if ((display1.value.includes('+',ultimoPonto) == true) || (display1.value.includes('-',ultimoPonto) == true)
                 || (display1.value.includes('*',ultimoPonto) == true) || (display1.value.includes('/',ultimoPonto) == true)) {
                  display1.value += valor
                 }
              } else if (display1.value.includes('.') == false) {
                display1.value += valor
              }
              
        break

        case '+':
        case '-':
        case '*':
        case '/':
                
            if (display1.value.endsWith('+') || display1.value.endsWith('-') || display1.value.endsWith('*') || display1.value.endsWith('/')) {
                var tamanho = display1.value.length
                
                //Substitui um operador aritmético por outro  
                if (tamanho > 1 || (valor == '-')) {
                  display1.value = (display1.value.substring(0, (tamanho -1))) + valor
                }

            } else if (display1.value === '') {
                //Se o primeiro valor digitado for - ele mostra no visor.
                if (valor === '-') {
                    display1.value += valor
                }

            } else {
                display1.value += valor
            }
        break

        case '=':

            if (display1.value != '') {
                var valor_campo = eval(display1.value)
                
                display1.value = valor_campo
                
                limpar() //limpa o resultado exibido no display2.
            }
        break
        }

    } else if (tipo === 'valor') {
          
        display1.value += valor
        subtotal(display1.value) //executa a função para mostrar o subtotal da operação
          
    }
}

//Calcula o subtotal que aparece no display 2.
function subtotal (string) {

    if (string.endsWith('+') || string.endsWith('-') || string.endsWith('/') || string.endsWith('*')) {
        var tamanho = string.length
        string = (string.substring(0, (tamanho -1)))
        var valor_subtotal = eval(string)
        display2.value = valor_subtotal
    } else {
        var valor_subtotal = eval(string)
        display2.value = valor_subtotal
    }
}

//Limpa o subtotal que aparece no display 2 quando pressionada a tecla =.
function limpar() {
    display2.value = ''
}

//Apaga o último valor clicado
function backspace() {
    var tamanho = display1.value.length
    display1.value = (display1.value.substring(0, (tamanho -1)))
    subtotal(display1.value)
}