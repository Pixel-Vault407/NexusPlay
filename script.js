let jogos=[];

fetch("games.json")

.then(response=>
response.json())

.then(data=>{

jogos=data;

mostrarJogos(jogos);

const pesquisa=

document.getElementById(
"pesquisa"
);

pesquisa.addEventListener(

"input",

()=>{

const resultado=

jogos.filter(

jogo=>

jogo.nome
.toLowerCase()

.includes(

pesquisa.value
.toLowerCase()

)

);

mostrarJogos(
resultado
);

}

);

});



function mostrarJogos(lista){

const games=

document
.getElementById(
"games"
);

games.innerHTML="";


lista.forEach(jogo=>{

games.innerHTML+=`

<div class="card">

<img src="${jogo.imagem}">

<div class="info">

<h3>

${jogo.nome}

</h3>

<p>

${jogo.descricao}

</p>

<b>

Requisitos:

</b>

<p>

${jogo.requisitos}

</p>

<a href=
"${jogo.link}"
target="_blank">

<button>

Baixar

</button>

</a>

</div>

</div>

`;

});

}



function filtrar(tipo){

if(tipo==="Todos"){

mostrarJogos(jogos);

return;

}

const resultado=

jogos.filter(

jogo=>

jogo.plataforma===tipo

);

mostrarJogos(
resultado
);

}


function explorar(){

document
.getElementById(
"games")

.scrollIntoView({

behavior:"smooth"

});

}