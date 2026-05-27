fetch("games.json")

.then(response => response.json())

.then(jogos => {

const games=document.getElementById("games");

const pesquisa=document.getElementById("pesquisa");

mostrarJogos(jogos);

pesquisa.addEventListener("input",()=>{

const resultado=jogos.filter(jogo=>

jogo.nome.toLowerCase()

.includes(

pesquisa.value.toLowerCase()

)

);

mostrarJogos(resultado);

});

function mostrarJogos(lista){

games.innerHTML="";

lista.forEach(jogo=>{

games.innerHTML += `

<div class="card">

<img src="${jogo.imagem}">

<div class="info">

<h3>${jogo.nome}</h3>

<p>${jogo.descricao}</p>

<b>Requisitos:</b>

<p>${jogo.requisitos}</p>

<a href="${jogo.link}" target="_blank">

<button>Ver jogo</button>

</a>

</div>

</div>

`;

});

}

});


function explorar(){

document
.getElementById("games")
.scrollIntoView({

behavior:"smooth"

});

}