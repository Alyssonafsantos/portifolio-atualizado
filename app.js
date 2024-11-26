const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menuLateral = document.getElementById('cabecalho-lista');
const form = document.getElementById('form');
const campos = document.querySelectorAll('.campo--input');
const span = document.querySelectorAll('.span-required');
const btnEnviar = document.getElementById('enviar');

// funcões que fazem as validações necessárias.

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    };
};

function emailValidate() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    };
};

function assuntoValidate() {
    if (campos[2].value.length < 6) {
        setError(2);
    } else {
        removeError(2);
    };
};

// funções que caracterizam os campos incorretos 

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
};

function removeError(index) {
    campos[index].style.border = '';
    span[index].style.display = 'none';
};

// ativar botao enviar formulario

function enviarFormulario() {
    let isValid = true;
    campos.forEach((campo, index) => {
        if (!campo.value) {
            setError(index);
            isValid = false;
        } else {
            removeError(index);
        };
    });

    if (isValid) {
        btnEnviar.disabled = true;
        btnEnviar.disabled = false;
    };
    alert('Preencha os campos corretamente');
};

// exibir menu lateral
btnMenu.addEventListener("click", () => {
    menuLateral.classList.add("aparecer");
    btnMenu.classList.add("esconder");
});

menuLateral.addEventListener("click", () => {
    menuLateral.classList.remove("aparecer");
    btnMenu.classList.remove("esconder");
});