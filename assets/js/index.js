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

var medidasYChapa1000 =[]
var medidasYChapa1200=[]

var medidasXChapa = [1000, 1200]

document.getElementById('botaoFormulario').onclick = function calcularTudo(){
    const peca1 = new Peca(document.getElementById('pecaX').value , document.getElementById('pecaY').value, document.getElementById('pesoSolid').value, document.getElementById('material').value, document.getElementById('espessura').value)
    if (peca1.espessura == 0.95){
       medidasYChapa1000.push(1630, 1690 , 2010, 2420, 3000)
       medidasYChapa1200.push(2100, 2625, 2781, 3000)
       for(var i=0; i<medidasYChapa1000.length; i++){
       var calculoPeca1 = calcDivisaoPeca1(1000,peca1.medidaXPeca)
       var calculoPeca2 = calcDivisaoPeca2(medidasYChapa1000[i], peca1.medidaYPeca)
       console.log(calculoPeca1, calculoPeca2)
       
       }
    }

}



