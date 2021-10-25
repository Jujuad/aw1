const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },
    telephone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
    date(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{4})\d+?$/, '$1')
    },
    number(value) {
        return value
            .replace(/\D/g, '')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('enviar')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById('Nome')
    const sobrenome = document.getElementById('Sobrenome')
    const data = document.getElementById('DataNasc')
    const email = document.getElementById('Email')
    const telephone = document.getElementById('Telefone')
    const cpf = document.getElementById('Cpf')
    const endereço = document.getElementById('End')
    const bairro = document.getElementById('Bairro')
    const numero = document.getElementById('Numero')
    const cep = document.getElementById('Cep')

    if (nome.value == '') {
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")
    }

    if (sobrenome.value == '') {
        sobrenome.classList.add("errorInput")
    } else {
        sobrenome.classList.remove("errorInput")
    }

    if (data.value == '') {
        data.classList.add("errorInput")
    } else {
        data.classList.remove("errorInput")
    }

    if (email.value == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (telephone.value == '') {
        telephone.classList.add("errorInput")
    } else {
        telephone.classList.remove("errorInput")
    }

    if (cpf.value == '') {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if (endereço.value == '') {
        endereço.classList.add("errorInput")
    } else {
        endereço.classList.remove("errorInput")
    }

    if (bairro.value == '') {
        bairro.classList.add("errorInput")
    } else {
        bairro.classList.remove("errorInput")
    }

    if (numero.value == '') {
        numero.classList.add("errorInput")
    } else {
        numero.classList.remove("errorInput")
    }

    if (cep.value == '') {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (cep.value.length <= 8) {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    if (cpf.value.length <= 13) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if ((telephone.value.length <= 13)) {
        telephone.classList.add("errorInput")
    } else {
        telephone.classList.remove("errorInput")
    }
})
