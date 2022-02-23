let carros = {
    nome:'Fiat',
    modelo:'Uno',
    peso: '800kg',
    ligar:function(){
        console.log("VRUM,VRUM!");
    },

    acelerar:function(){
        console.log("Riiiiieeee");
    },

    freiar:function(){
        console.log("Freiarrr...");
    }
    
}
/*
//Obejto é definodo por nome.
//Array é definido por número.
console.log( carros.nome );  /* Mais usado 
console.log("modelo:" + carros.modelo);
console.log("Peso:" + carros.peso);

console.log(carros['nome']); //Menos Usado.
*/

carros.ligar();
carros.acelerar();
carros.freiar();