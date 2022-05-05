import { Peca } from "./Peca.js"
import {publicarFooter} from "./footer.js"
import {publicarHeader} from "./header.js"
import {seletorMaterial} from "./seletorMateriaEspessura.js"


var footer = document.querySelector('footer')

document.onload = publicarHeader()
document.onload = publicarFooter()

var material = document.getElementById('material')
var espessura = document.getElementById('espessura')
material.addEventListener("click", seletorMaterial)

var calcDivisaoPeca1 = ( medidaXchapa, medidaXpeca ) => medidaXchapa / medidaXpeca

var calcDivisaoPeca2 = ( medidaYchapa, medidaYpeca ) => medidaYchapa / medidaYpeca

document.getElementById('botaoFormulario').onclick = function calcularTudo(){
    const peca1 = new Peca(document.getElementById('pecaX').value , document.getElementById('pecaY').value, document.getElementById('pesoSolid').value, document.getElementById('material').value, document.getElementById('espessura').value)
    console.log(peca1)
}

