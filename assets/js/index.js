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
var pesoChapa = (espessura, medidasXChapa, medidaYChapa)=> espessura * medidasXChapa * medidaYChapa
var localResultado = document.getElementById('resultado')


var fatorAco = 0.00788

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
    if(peca1.espessura == 1.2){
        medidasXChapa.push(1040, 1240)
        medidasYChapaA.push(2320, 2900)
        medidasYChapaB.push(1840, 2390, 2690, 2990)
    }
    if(peca1.espessura == 1.5){
        medidasXChapa.push(1040, 1240)
        medidasYChapaA.push(2390)
        medidasYChapaB.push(2003, 2315,2990)
    }
    if(peca1.espessura == 2){
        medidasXChapa.push(1040, 1240)
        medidasYChapaB.push(2990)
    }
    if(peca1.espessura == 4){
        medidasXChapa.push(1040, 1240)
        medidasYChapaB.push(2990)
    }


    for(var i=0; i<medidasYChapaA.length; i++){
        
       var quantidadePeca1 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapaA[i], peca1.medidaYPeca)-0.5)
       var quantidadePeca2 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapaA[i],peca1.medidaXPeca)-0.5)
        var valorPesoChapa = pesoChapa(peca1.espessura, medidasXChapa, medidasYChapaA[i])
            console.log(valorPesoChapa)


       var resultado1PecaHorizontal = `<p>A seguinte chapa : ${medidasXChapa[0]} X ${medidasYChapaA[i]} com peça na horizontal cabem o total de : ${quantidadePeca1} Peças</p>`
       var resultado1PecaVertical = `<p>A seguinte chapa : ${medidasXChapa[0]} X ${medidasYChapaA[i]} com peça na vertical cabem o total de : ${quantidadePeca2} Peças</p>`
       localResultado.innerHTML += `${resultado1PecaHorizontal}`
       localResultado.innerHTML +=`${resultado1PecaVertical}`
    }


    for(var a=0; a<medidasYChapaB.length; a++){ 
        
       var quantidadePeca3 = Math.round(calcDivisaoPeca(medidasXChapa[1],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapaB[a], peca1.medidaYPeca)-0.5)
       var quantidadePeca4 = Math.round(calcDivisaoPeca(medidasXChapa[1],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapaB[a],peca1.medidaXPeca)-0.5)



        var resultado2PecaHorizontal= `<p>A seguinte chapa : ${medidasXChapa[1]} X ${medidasYChapaB[a]} com peça na horizontal cabem o total de : ${quantidadePeca3} Peças</p>` 
        var resultado2PecaVertical = `<p>A seguinte chapa : ${medidasXChapa[1]} X ${medidasYChapaB[a]} com peça na vertical cabem o total de : ${quantidadePeca4} Peças</p>`
        localResultado.innerHTML +=`${resultado2PecaHorizontal}`
        localResultado.innerHTML +=`${resultado2PecaVertical}`
        
    }
    
   
}
        
    

