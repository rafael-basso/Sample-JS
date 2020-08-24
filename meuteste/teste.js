var num = document.querySelector('input#num')
var list = document.querySelector('select#list')
var vetor = []
var res = document.querySelector('div#res')

//checar se valor ja foi inserido
function checar(v, vet){
    if(vet.indexOf(v) != -1)
        return true
    else
        return false
}

function inserir(){
    if(num.value.length != 0){
        if(checar(num.value,vetor))
            alert('Valor ja inserido no vetor')
        else{
            vetor.push(num.value)
            var item = document.createElement('option')
            item.text = `Vetor [${vetor.indexOf(num.value)}] = ${num.value}`
            list.appendChild(item)
            num.value = ''
            num.focus();
        }    
        
    } else
        alert('Por favor, insira um numero')            
}

function show(){
    if(res.innerHTML.length == 0){
        if(vetor.length == 0)
            alert('Vetor vazio')
        else {
        for(var i in vetor)
            res.innerHTML += `Posicao [${i}] = ${vetor[i]}<br>`
        }
    } else {
        res.innerHTML = ''
    }
}

function limpar(){
    res.innerHTML = ''
    vetor.length = 0
    list.innerHTML = ''
    num.value = ''
    num.focus()
}
