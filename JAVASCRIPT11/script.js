/*let dia = 4;
let diaNome ='';

switch (dia) {
    case 6:
    case 7:
        diaNome = 'Final de Semana!';
        break;
    default:
        diaNome = 'Dia de Semana!';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome + " Temos que trabalhar!"; */


//let texto = '';
/*
let carros = ['Ferrari', 'Fusca', 'Palio', 'Corola', 'Lamborguine'];

let html = '<ul>';

for(let i in carros){
    html += '<li>'+ carros[i] +'</li>';
}


html += '</ul>';

*/

/*
for(let i = 1; i <= 10; i++) {

    texto = texto + i + '<br>';
}
 */
let html = '';

let c = 1;

while(c <= 10){
    html += "Número: " +c+ "<br/>";
    c++;
}

for( let c = 1; c <=10; c++ ){
  html += "Número: " +c+ "<br/>";
}
document.getElementById('demo').innerHTML = html;