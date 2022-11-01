const form = document.getElementById('form_contato');
let linhasTabela = '';

const nomes = [ ]


form.addEventListener('submit', function(e){
     e.preventDefault();
     adicionaLinha();
     atualizaTabela();

})

function adicionaLinha(){

     const inputNome = document.getElementById('nome');
     const inputTelefone = document.getElementById('telefone');

     if(nomes.includes(inputNome.value)){
          alert(`O nome: ${inputNome} já foi inserido`);
     }else{


          nomes.push(inputNome.value);

          let linha = '<tr>';
          linha += `<td>${inputNome.value}</td>`;
          linha += `<td>${inputTelefone.value}</td>`;
          linha += '</tr>';

          linhasTabela += linha;
     }

     inputNome.value= '';
     inputTelefone.value = ''

}

function atualizaTabela(){

     const corpoTabela = document.getElementById('corpo_tabela');
     corpoTabela.innerHTML = linhasTabela;
}