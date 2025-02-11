function limpaCampo() {
    let inputs = document.querySelectorAll('input');
    for (let element of inputs) {
        element.value = '';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("form-login");
    const emailInput = document.getElementById("input-email");
    const senhaInput = document.getElementById("input-senha");
    const mensagemErro = document.getElementById("mensagem-erro");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let usuarioValido = usuarios.find(usuario => 
            usuario.email === emailInput.value && usuario.senha === senhaInput.value
        );

        if (usuarioValido) {
            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
            window.location.href = "../../index.html";
        } else {
            mensagemErro.textContent = "Usuário ou senha inválidos!";
            mensagemErro.style.color = "red";
            if (typeof $ !== "undefined") {
                $("#mensagem-erro").hide().slideDown(500).delay(2000).slideUp(500);
            } else {
                mensagemErro.style.display = "block";
                setTimeout(() => {
                    mensagemErro.style.display = "none";
                }, 2500);
            }
        }
    });
});
