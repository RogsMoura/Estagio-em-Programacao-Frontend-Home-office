function login() {
    // Limpar mensagens de erro
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('message').innerText = '';

    // Obter valores dos campos
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validação do e-mail
    if (!email) {
        document.getElementById('emailError').innerText = 'O campo e-mail é obrigatório.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').innerText = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    // Validação da senha
    if (!password) {
        document.getElementById('passwordError').innerText = 'O campo senha é obrigatório.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'A senha deve ter pelo menos 6 caracteres.';
        isValid = false;
    }

    // Exibir mensagem de sucesso ou erro
    if (isValid) {
        document.getElementById('message').innerText = 'Login realizado com sucesso!';
        document.getElementById('message').className = 'success';
    } else {
        document.getElementById('message').innerText = 'Por favor, corrija os erros acima.';
        document.getElementById('message').className = 'error';
    }
}