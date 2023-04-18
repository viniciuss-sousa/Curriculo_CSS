const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário

  // validação dos campos
  const nome = document.querySelector('#nome');
  const sobrenome = document.querySelector('#sobrenome');
  const telefone = document.querySelector('#telefone');
  const email = document.querySelector('#email');
  const mensagem = document.querySelector('#mensagem');
  const prototipo = document.querySelector('#prototipo');
  const preferenciaLinguagem = document.querySelector('#preferencia-linguagem');
  const preferenciaTurno = document.querySelector('#preferencia-turno');
  const horarioSugerido = document.querySelector('#horario-sugerido');
  const previsaoEntrega = document.querySelector('#previsao-entrega');

  if (nome.value === '' || sobrenome.value === '' || telefone.value === '' || email.value === '' || prototipo.value === '') {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert('Por favor, insira um endereço de email válido.');
    return;
  }

  if (preferenciaLinguagem.selectedOptions.length === 0) {
    alert('Por favor, selecione pelo menos uma linguagem de programação.');
    return;
  }

  // envio do formulário
  const formData = new FormData(form);

  fetch('https://docs.google.com/spreadsheets/d/1kBD6fqEBkft-V6p3EwvIlY7rE__tfSJpnDjdH0ODqaY/edit?resourcekey#gid=1242306010', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    
      alert('Formulário enviado com sucesso!');
      form.reset();
  })
  .catch(function(error) {
    alert('Ocorreu um erro ao enviar o formulário.');
    console.error(error);
  });
});

const limpar = document.querySelector('#limpar');

limpar.addEventListener('click', function() {
  form.reset();
});
