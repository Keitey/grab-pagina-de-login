let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let email = id('email'),
    password = id('password'),
    form = id('form'),
    favIcon = classes('fa-solid'),
    errorMsg = classes('error');

    form.addEventListener('submit', (error) => {
        error.preventDefault();

        validation(email, 0, 'Por favor, insira um email válido');
        validation(password, 1, 'Por favor, insira uma senha válida');
    });

    let validation = (id, serial, message) => {

        if(id.value.trim() === '') {
            errorMsg[serial].innerHTML = message;
            id.style.border = '2px solid #FF5757';
            favIcon[serial].style.color = '#FF5757';
        }else {
            errorMsg[serial].innerHTML = '';
            id.style.border = '2px solid #79f26e';
            favIcon[serial].style.color = '#79f26e';
        }
    };
