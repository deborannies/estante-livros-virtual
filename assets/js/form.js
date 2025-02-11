
function limpaCampo() {
    let inputs = document.querySelectorAll('input');
    for (let element of inputs) {
        element.value = '';
    }
}

function salvarNoLocalStorage() {
    let nome = document.getElementById('input-nome').value;
    let email = document.getElementById('input-email').value;
    let senha = document.getElementById('input-senha').value;

    let usuario = { nome, email, senha };
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-cadastro");
    const inputs = document.querySelectorAll(".input");
    const checkboxTermos = document.getElementById("checkbox-termos");
    const btnRegistrar = document.getElementById("btn-registrar");
    const senhaInput = document.getElementById("input-senha");
    const confirmaSenhaInput = document.getElementById("input-confirma");
    const erroSenha = document.getElementById("erro-confirma");

    function validarSenha() {
        erroSenha.textContent = senhaInput.value !== confirmaSenhaInput.value ? "As senhas não coincidem!" : "";
        return erroSenha.textContent === "";
    }

    function validarFormulario() {
        let valido = Array.from(inputs).every(input => {
            let erroSpan = document.getElementById(`erro-${input.id.split('-')[1]}`);
            if (!input.checkValidity() || input.value.trim() === "") {
                erroSpan.textContent = `Por favor, preencha o campo ${input.name || input.id.split('-')[1]}.`;
                return false;
            }
            erroSpan.textContent = "";
            return true;
        });

        if (!checkboxTermos.checked || !validarSenha()) {
            valido = false;
        }

        btnRegistrar.disabled = !valido;
    }

    inputs.forEach(input => {
        input.addEventListener("input", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    });

    checkboxTermos.addEventListener("change", validarFormulario);
    senhaInput.addEventListener("input", validarFormulario);
    confirmaSenhaInput.addEventListener("input", validarFormulario);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        salvarNoLocalStorage();
        recuperarDadosComAnimacao();

        $("#mensagem-sucesso").hide().slideDown(500).delay(2000).slideUp(500);

        form.reset();
    });
});

$(document).ready(function () {
    $("#input-nome").mask("A", { translation: { "A": { pattern: /[a-zA-Z\s]/, recursive: true } } });
    $("#input-email").mask("A", { translation: { "A": { pattern: /[a-zA-Z0-9@._-]/, recursive: true } } });
    $("#input-senha").mask("A", { translation: { "A": { pattern: /[a-zA-Z0-9]/, recursive: true } } });

    recuperarDadosComAnimacao();
});

function recuperarDadosComAnimacao() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (usuarios.length > 0) {
        let ultimoUsuario = usuarios[usuarios.length - 1];

        $("#usuario-nome").text(ultimoUsuario.nome);
        $("#usuario-email").text(ultimoUsuario.email);
        $("#dados-usuario").fadeIn(1000);
    }
}



// class Usuario {
//     constructor(nome, email, senha) {
//         this.nome = nome;
//         this.email = email;
//         this.senha = senha;
//     }
// }

// function validarSenha() {
//     let senha = document.getElementById('input-senha').value;
//     let senhaConfirma = document.getElementById('input-confirma').value;
//     let erroSenha = document.getElementById('erro-senha');

//     if (senha !== senhaConfirma) {
//         erroSenha.textContent = "As senhas não coincidem!";
//         event.preventDefault();
//         return false;
//     } else {
//         erroSenha.textContent = "";
//         return true;
//     }
// }

// function limpaCampo() {
//     let inputs = document.querySelectorAll('input');
//     for (let element of inputs) {
//         element.value = '';
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("form-cadastro");
//     const inputs = document.querySelectorAll(".input");
//     const checkboxTermos = document.getElementById("checkbox-termos");
//     const btnRegistrar = document.getElementById("btn-registrar");

//     function validarFormulario() {
//         let valido = true;
//         inputs.forEach(input => {
//             const erroSpan = document.getElementById(`erro-${input.id.split('-')[1]}`);
            
//             if (!input.checkValidity() || input.value.trim() === "") {
//                 erroSpan.textContent = `Por favor, preencha o campo ${input.name || input.id.split('-')[1]}.`;
//                 valido = false;
//             } else {
//                 erroSpan.textContent = "";
//             }
//         });

//         if (!checkboxTermos.checked) {
//             valido = false;
//         }
//         btnRegistrar.disabled = !valido;
//     }

//     inputs.forEach(input => {
//         input.addEventListener("input", validarFormulario);
//         input.addEventListener("blur", validarFormulario); // Valida ao sair do campo
//     });

//     checkboxTermos.addEventListener("change", validarFormulario);
// });




// function exibeDados() {
//      event.preventDefault();
//      let nome = document.getElementById('input-nome').value;
//      let email = document.getElementById('input-email').value;
//      let senha = document.getElementById('input-senha').value;
//      let senhaConfirma = document.getElementById('input-confirma').value;

//      let usuario = new Usuario(nome, email, senha);

//      let exibicao = document.getElementById('exibicao');
//      exibicao.innerHTML = `
//          <p><strong>Nome:</strong> ${usuario.nome}</p>
//          <p><strong>Email:</strong> ${usuario.email}</p>
//          <p><strong>Senha:</strong> ${usuario.senha}</p>
//      `;
// }





// //document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Impede o envio do formulário

//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

//     // Verifica se os campos obrigatórios estão preenchidos
//     if (!nome || !email || !senha || !confirmacaoSenha) {
//         alert("Todos os campos são obrigatórios!");
//         return;
//     }

//     // Verifica se as senhas coincidem
//     if (senha !== confirmacaoSenha) {
//         alert("As senhas não conferem!");
//         return;
//     }

//     // Exibir os dados no console
//     exibeDados();
// });

// function limpaCampo() {
//     var inputs = document.querySelectorAll("input");
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].value = "";
//     }
// }


// function exibeDados() {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

//     console.log("Nome:", nome);
//     console.log("Email:", email);
//     console.log("Senha:", senha);
//     console.log("Confirmação Senha:", confirmacaoSenha);
// }
