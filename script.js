fetch("games.json")

.then(response => response.json())

.then(jogos => {

const games = document.getElementById("games");

if(jogos.length > 0){

games.innerHTML = "";

}

jogos.forEach(jogo => {

games.innerHTML += `

<div class="card">

<img src="${jogo.imagem}">

<div class="info">

<h3>${jogo.nome}</h3>

<p>${jogo.descricao}</p>

<br>

<b>Requisitos:</b>

<p>${jogo.requisitos}</p>

<a href="${jogo.link}" target="_blank">

<button>Ver jogo</button>

</a>

</div>

</div>

`;

});

})

.catch(error => {

console.log("Erro:", error);

});