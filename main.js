
function inscrever() {
    let nome = document.querySelector('#inputNome').value
    let curso = document.querySelector('#inputCurso').value
    if (nome && curso) {
       alert(nome + '' + curso)
    }
}


function start() {
    let nome = document.querySelector('#inputNome').value
    let curso = document.querySelector('#inputCurso').value
    preventSubmitForm();
}

var globalAlunos = ['alunos0','alunos02','alunos03']