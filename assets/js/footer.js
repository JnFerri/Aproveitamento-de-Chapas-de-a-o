
document.onload = publicarFooter()

export function publicarFooter(){
    var localFooter = document.getElementById('footer')
    localFooter.innerHTML = `<div class="footer__container">
        <p class="footer__copyright">Site feito por Jean Ferri, todos direitos reservados &copy;</p>
        <p class="footer__contato">Contato : jeanferrimh@gmail.com</p>
    </div>`
}