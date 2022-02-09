function subirTela(){
   window.scrollTo({
      top:0,
      behavior: ''
   });
}

function decidirBotaoScroll(){

 if(window.scrollY === 0){
      // ocutar o botão
      document.querySelector('.scrollbutton').getElementsByClassName.display = 'none';
 } else {
      document.querySelector('.scrollbutton').getElementsByClassName.display = 'block';
 }

}

window.addEventListener('scroll', decidirBotaoScroll);