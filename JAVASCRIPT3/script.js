/*function alterar(titulo){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

   
function somar(x, y){
    let total = x + y;
 
    return total;
}

var resultado = somar(10, 15); 

console.log(resultado);
*/

function trocarImagem(filename, animalname){
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');

    alert('O animal é: ' +  animal);
}