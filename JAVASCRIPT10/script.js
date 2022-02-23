/*
let carro = {
    nome:'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("VRum Vrum!!!");
    },
    acelerar:function(){
       if(this.ligado == true){
        console.log("Riiiiiihhh!");
       } else {
           console.log(this.nome+ " " + this.modelo+ " Não está ligado!");
       }
    }
};

console.log("Modelo: "+carro.modelo);


carro.ligar();
carro.acelerar();
*/

let carros = [
    {nome:'Fiat', Modelo:'Uno'},
    {nome:'Toyota', Modelo:'Corolla'},
    {nome:'Gm', Modelo: 'Celta'},
    {nome:'Hyunday', Modelo:'hb20'}
];

console.log(carros[1].nome);