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

botao_buscar.addEventListener('click', ()=> { core(); limpaInput(); });
window.addEventListener('keypress', (e)=> {if(e.key === "Enter"){ core(); limpaInput(); }});
botao_limpar.addEventListener('click', () => { limpaInfo(); });

async function buscaFilme(nomeBusca){
    const resposta = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${nomeBusca}`);
    return resposta.json();
}


async function core(){
    try{
        const filme = await buscaFilme(nomeBusca.value);
        validaFilme(filme);
        defineValores(filme);

    }catch(erro){
        mensagemErro.textContent = erro;
    }
}

function validaFilme(filme){
    if(filme.Plot === undefined || filme.Year === undefined || filme.Actors === "N/A"){
        throw new Error("Filme não encontrado!");
    }
}

function defineValores(filme){
    poster.setAttribute("src", filme.Poster);
    titulo.textContent = filme.Title;
    sinopse.textContent = filme.Plot;
    ano.textContent = `Year: ${filme.Year}`;
    duracao.textContent = `Runtime: ${filme.Runtime}`;
    avaliacao.textContent = `Rating: ${filme.imdbRating}`;
    genero.textContent = `Genre: ${filme.Genre}`;
    atores.textContent = `Actors: ${filme.Actors}`;
    diretor.textContent = `Director: ${filme.Director}`;
}

function limpaInfo(){
    nomeBusca.value = "";
    poster.setAttribute("src", "default_image.png");
    titulo.textContent = '';
    sinopse.textContent = '';
    ano.textContent = '';
    duracao.textContent = ''; 
    avaliacao.textContent = '';
    genero.textContent = '';
    atores.textContent = '';
    diretor.textContent = '';
}

function limpaInput(){
    nomeBusca.value = '';
}