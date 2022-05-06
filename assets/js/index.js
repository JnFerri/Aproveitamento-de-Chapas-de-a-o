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

var calcDivisaoPeca = ( medidaChapa, medidaPeca ) => medidaChapa / medidaPeca



var medidasYChapa1000 =[]
var medidasYChapa1200=[]

var medidasXChapa = [1000, 1200]

document.getElementById('botaoFormulario').onclick = function calcularTudo(){
    const peca1 = new Peca(document.getElementById('pecaX').value , document.getElementById('pecaY').value, document.getElementById('pesoSolid').value, document.getElementById('material').value, document.getElementById('espessura').value)
    if (peca1.espessura == 0.95){
       medidasYChapa1000.push(1620, 1680 , 2000, 2410, 2990)
       medidasYChapa1200.push(2090, 2615, 2771, 2990)
       for(var i=0; i<medidasYChapa1000.length; i++){
       var calculoPeca1 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapa1000[i], peca1.medidaYPeca)-0.5)
       var calculoPeca2 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapa1000[i],peca1.medidaXPeca)-0.5)
        var resultadoPecaHorizontal = `A seguinte chapa : ${medidasXChapa[0]} X ${medidasYChapa1000[i]} com peça na horizontal cabem o total de : ${calculoPeca1} Peças`
        var resultadoPecaVertical = `A seguinte chapa : ${medidasXChapa[0]} X ${medidasYChapa1000[i]} com peça na vertical cabem o total de : ${calculoPeca2} Peças`
        
       
    }

}


}
