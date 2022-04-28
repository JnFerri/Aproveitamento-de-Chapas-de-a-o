document.onload = publicarHeader();
function publicarHeader(){
    var header = document.getElementById('header')
    header.innerHTML = `<div class="header__container">
    <img class="header__imagem" src="assets/img/calculos.png" alt="imagem avioeste">
   
    <ul class="header__lista" type="none">
        <li class="header__link"><a href="index.html">Home</a></li>
    </ul>
</div>`

}