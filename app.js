const nomeBusca = document.querySelector(".input");
const mensagemErro = document.querySelector("#mensagemErro");
const titulo = document.querySelector("#titulo");
const sinopse = document.querySelector("#sinopse");
const ano = document.querySelector("#ano");
const duracao = document.querySelector("#duracao");
const avaliacao = document.querySelector(".valorAvaliacao");
const genero = document.querySelector("#genero");
const atores = document.querySelector("#atores");
const diretor = document.querySelector("#diretor");
const poster = document.querySelector(".poster");
const botao_buscar = document.querySelector("#botao_buscar");
const botao_limpar = document.querySelector("#botao_limpar");
const apiKey = "d0f200f6";

botao_buscar.addEventListener('click', ()=> { core(); });

async function buscaFilme(nomeBusca){
    const resposta = await fetch(`http://www.omdbapi.com/?s=${nomeBusca}&apikey=${apiKey}`);
    return resposta.json();
}


async function core(){
    try{
        const filme = await buscaFilme(nomeBusca.value);
        console.log(filme);
        // validaFilme(filme);

    }catch(erro){
        mensagemErro.textContent = erro;
    }
}

function validaFilme(filme){
    if(filme);
}