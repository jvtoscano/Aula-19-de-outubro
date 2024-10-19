function Soma(n1,n2){
    const calculo = n1 + n2;
    console.log(calculo)
}

function validateSenha(senha){
    const senhaQtd = senha.length;
    if(senhaQtd >= 6){
        console.log("Senha válida")
    }
    else{
        console.log("Senha inválida")
    }
}

validateSenha("123456")
validateSenha("1234")
validateSenha() // aqui o parâmetro é inválido, logo dá erro.
// Soma(10,10)
// Soma(30,20)