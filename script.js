fetch("games.json")

.then(response=>response.json())

.then(jogos=>{

const games=document.getElementById("games");

if(jogos.length>0){

games.innerHTML="";

}

jogos.forEach(jogo=>{

games.innerHTML+=`

<div class="card">

<img src="${jogo.imagem}">

<div class="info">

<h3>${jogo.nome}</h3>

<a href="${jogo.link}" target="_blank">

<button>Ver Jogo</button>

</a>

</div>

</div>

`;

});

});