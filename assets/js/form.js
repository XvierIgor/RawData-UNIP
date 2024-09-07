const form = document.querySelector('.signup-form');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem!'); 
    return; 
  }

  
  form.action = "cadastro-sucesso.html"; 
  form.submit(); 
});
