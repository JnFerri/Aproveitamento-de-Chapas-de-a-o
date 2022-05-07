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

var localResultado = document.getElementById('resultado')


var medidasYChapaA =[]
var medidasYChapaB=[]


var medidasXChapa = []

document.getElementById('botaoFormulario').onclick = function calcularTudo(){
    const peca1 = new Peca(document.getElementById('pecaX').value , document.getElementById('pecaY').value, document.getElementById('pesoSolid').value, document.getElementById('material').value, document.getElementById('espessura').value)


    if(peca1.espessura == 0.5 ){
        medidasXChapa.push(1000,1200)
        medidasYChapaA.push(2990)
    }
    if (peca1.espessura == 0.95){
        medidasXChapa.push(1000,1200)
       medidasYChapaA.push(1620, 1680 , 2000, 2410, 2990)
       medidasYChapaB.push(2090, 2615, 2771, 2990)
       console.log(medidasXChapa)
    }

    if (peca1.espessura == 1.25 ){
        medidasXChapa.push(1000,1200)
        medidasYChapaA.push(2410,2600,2990)
        medidasYChapaB.push(1565, 1665, 2490, 2850, 2990)
    }
    if(peca1.espessura == 1.95 ){
        medidasXChapa.push(1000,1200)
        medidasYChapaA.push(1660, 2860, 2990)
        medidasYChapaB.push(1690, 2000, 2410, 2990)
    }
    if(peca1.espessura == 2.7 ){
        medidasXChapa.push(1000,1200)
        medidasYChapaB.push(2000)
    }
    if(peca1.espessura == 0.8 ){
        medidasXChapa.push(1040, 1240)
        medidasYChapaA.push(1620, 2380, 2670, 2890)
        medidasYChapaA.push(3000)
    }
    
    for(var i=0; i<medidasYChapaA.length; i++){
       var calculoPeca1 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapaA[i], peca1.medidaYPeca)-0.5)
       var calculoPeca2 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapaA[i],peca1.medidaXPeca)-0.5)
       var calculoPeca3 = Math.round(calcDivisaoPeca(medidasXChapa[1],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapaB[i], peca1.medidaYPeca)-0.5)
       var calculoPeca4 = Math.round(calcDivisaoPeca(medidasXChapa[1],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapaB[i],peca1.medidaXPeca)-0.5)
    
        var resultado1PecaHorizontal = `<p>A seguinte chapa : ${medidasXChapa[0]} X ${medidasYChapaA[i]} com peça na horizontal cabem o total de : ${calculoPeca1} Peças</p>`
        var resultado1PecaVertical = `<p>A seguinte chapa : ${medidasXChapa[0]} X ${medidasYChapaA[i]} com peça na vertical cabem o total de : ${calculoPeca2} Peças</p>`
        var resultado2PecaHorizontal= `<p>A seguinte chapa : ${medidasXChapa[1]} X ${medidasYChapaB[i]} com peça na horizontal cabem o total de : ${calculoPeca3} Peças</p>` 
        var resultado2PecaVertical = `<p>A seguinte chapa : ${medidasXChapa[1]} X ${medidasYChapaB[i]} com peça na vertical cabem o total de : ${calculoPeca4} Peças</p>`
        var resultado = `${resultado1PecaHorizontal} ${resultado2PecaHorizontal} ${resultado1PecaVertical} ${resultado2PecaVertical}`
        localResultado.innerHTML += resultado
    }
    
   
}
        
    

