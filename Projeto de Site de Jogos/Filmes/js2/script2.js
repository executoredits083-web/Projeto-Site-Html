// função para verificar idade
function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
    if (idade < 18){
        alert("Para viajar sozinho, é necessário ser maior de idade");
    }
}

function enviarFormulario(event){
    // a linha abaixo impede o recarregamento da página
    event.preventDefault();
    // capturar os dados do formulário    
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let destino = document.getElementById("destino").value;
    let dtIda = document.getElementById("dataIda").value;
    let dtVolta = document.getElementById("dataVolta").value;

    // selecionar uma div para exibir o resultado
    let resultado = document.getElementById("resultado");

    // exibindo na tela
    resultado.innerHTML = `
        <div class='card p-3 mt-3'>
          <h4> Dados do cadastro </h4>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Idade:</strong> ${idade}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Destino:</strong> ${destino}</p>
            <p><strong>Data de ida:</strong> ${dtIda}</p>
            <p><strong>Data de volta:</strong> ${dtVolta}</p>
    `;
}