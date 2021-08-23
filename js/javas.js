function verlogin() {
	var email = document.login.email.value;
	var senha = document.login.senha.value;
	var bva = 'Bem vinda';
	var bvo = 'Bem Vindo';
	if (email == 'ana@gmail.com' && senha == '54321') {
		alert('Administradora');
		alert(bva+' Ana Clara');
		window.open("indexlog.html");
	} else if (email == 'gabriel@gmail.com' && senha == '54321') {
		alert('Administrador');
		alert(bvo+' Gabriel Batista');
		window.open("indexlog.html");
	}else if (email == 'julioa@gmail.com' && senha == '54321') {
		alert('Administrador');
		alert(bvo+' Julio Martins');
		window.open("indexlog.html");
	} else if (email == 'lucas@gmail.com' && senha == '54321') {
		alert('Administrador');
		alert(bvo+' Lucas Henrique');
		window.open("indexlog.html");
	}else if (email == 'pedro@gmail.com' && senha == '54321'){
		alert('Administrador');
		alert(bvo+' Pedro Henrique');
		window.open("indexlog.html");
	}else if (email == 'user@gmail.com' && senha == '54321'){
		alert(bvo);
		window.open("indexlog.html");
	}
	else {
		alert('Login ou senha Incorreto');
	}
	
}

function criaruser() {
	var email = document.criar_form.email.value;
	var email_nov = document.criar_form.email_nov.value;
	var senha = document.criar_form.senha.value;
	var senha_nov = document.criar_form.senha_nov.value;
	if (email == email_nov) {
		if (senha == senha_nov) {
			alert('Login Criado Com Sucesso');
			window.open("indexlog.html");
		} else {
			alert('As senhas Não estão iguais');
		}
	} else {
		alert('O E-mail não está igual');
	}
}