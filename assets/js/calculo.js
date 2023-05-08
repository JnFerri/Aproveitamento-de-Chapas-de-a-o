import { Peca } from "./Peca.js"


var medidasYChapaA =[]
var medidasYChapaB=[]


var medidasXChapa = []
var fatorMaterial = 0

var calcDivisaoPeca = ( medidaChapa, medidaPeca ) => medidaChapa / medidaPeca

var pesoChapa = (espessura, medidasXChapa, medidaYChapa) => (espessura * (medidasXChapa +10) * (medidaYChapa + 10) * fatorMaterial) / 1000

var pesoUnd = (pesodaChapa, numeroPecas) => pesodaChapa / numeroPecas
var localResultado = document.getElementById('resultado')

export function calcularTudo(){
    const peca1 = new Peca(document.getElementById('pecaX').value , document.getElementById('pecaY').value, document.getElementById('pesoSolid').value, document.getElementById('material').value, document.getElementById('espessura').value)

    localResultado.innerHTML = ''

    if(peca1.espessura == 0.5 && peca1.material == 'galvanizado' ){
        medidasXChapa.push(990,1190)
        medidasYChapaA.push(2990)
        fatorMaterial = 0.00788
    }
    if (peca1.espessura == 0.95){
        medidasXChapa.push(990,1190)
       medidasYChapaA.push(1620, 1680 , 2000, 2410, 2990)
       medidasYChapaB.push(2090, 2615, 2771, 2990)
       fatorMaterial = 0.0078
    }

    if (peca1.espessura == 1.25 ){
        medidasXChapa.push(990,1190)
        medidasYChapaA.push(2600)
        medidasYChapaB.push(1565, 1665, 2490, 2850, 2990)
        fatorMaterial = 0.00788
    }
    if(peca1.espessura == 1.95 ){
        medidasXChapa.push(990,1190)
        medidasYChapaA.push(1660, 2860, 2990)
        medidasYChapaB.push(1690, 2000, 2410)
        fatorMaterial = 0.00788
    }
    if(peca1.espessura == 2.7 ){
        medidasXChapa.push(990,1190)
        medidasYChapaB.push(1990)
        fatorMaterial = 0.00788
    }
    if(peca1.espessura == 0.8 && peca1.material == 'inox304'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaA.push(1620, 2380, 2670, 2890)
        medidasYChapaB.push(2990)
        fatorMaterial = 0.008
    }
    if(peca1.espessura == 1.2 && peca1.material == 'inox304'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaA.push(2320, 2900)
        medidasYChapaB.push(1840, 2390, 2690, 2990)
        fatorMaterial = 0.008
    }
    if(peca1.espessura == 1.5){
        medidasXChapa.push(1030, 1230)
        medidasYChapaA.push(2190)
        medidasYChapaB.push(2003, 2315,2990)
        fatorMaterial = 0.008
    }
    if(peca1.espessura == 2 && peca1.material == 'inox304'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaB.push(2990, 990)
        fatorMaterial = 0.008
    }
    if(peca1.espessura == 4){
        medidasXChapa.push(1030, 1230)
        medidasYChapaB.push(2990,990)
        fatorMaterial = 0.008
    }

    if(peca1.espessura ==0.5 && peca1.material == 'inox430'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaA.push(1830)
        medidasYChapaB.push(1830)
        fatorMaterial = 0.008
    }
    if(peca1.espessura ==0.8 && peca1.material == 'inox430'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaB.push(1875)
        fatorMaterial = 0.008
    }
    if(peca1.espessura == 1.2 && peca1.material == 'inox430'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaB.push(2990)
        fatorMaterial = 0.008
    }
    if(peca1.espessura == 2 && peca1.material == 'inox430'){
        medidasXChapa.push(1030, 1230)
        medidasYChapaB.push(2990)
        fatorMaterial = 0.008
    }


    for(var i=0; i<medidasYChapaA.length; i++){
        
       var quantidadePeca1 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapaA[i], peca1.medidaYPeca)-0.5)
       var quantidadePeca2 = Math.round(calcDivisaoPeca(medidasXChapa[0],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapaA[i],peca1.medidaXPeca)-0.5)
        var valorPesoChapaA = pesoChapa(peca1.espessura, medidasXChapa[0], medidasYChapaA[i])
        var pesoPeca1Horizontal = pesoUnd (valorPesoChapaA, quantidadePeca1)
        var pesoPeca1Vertical = pesoUnd (valorPesoChapaA, quantidadePeca2)
        var perda1Horizontal = ((pesoPeca1Horizontal / peca1.pesoSolid)-1) * 100
        var perda1Vertical = ((pesoPeca1Vertical / peca1.pesoSolid)-1) * 100
        console.log(valorPesoChapaA)
        


       var resultado1PecaHorizontal = `<div class="resultado__box">
       <ul type="none">
           <li>
               <h3 class="resultado__medida">${medidasXChapa[0]+10} X ${medidasYChapaA[i]+10}</h3>
           </li>
           <li>
               <p class="resultado__orientacao">Horizontal</p>
           </li>
           <li>
               <p class="resultado__quantidade">${quantidadePeca1} Peças</p>
           </li>
           <li>
               <p class="resultado__quantidade">Valor em UND = ${(peca1.pesoSolid / valorPesoChapaA).toFixed(8)}</p>
           </li>
           <li>
               <p class="resultado__perca">${perda1Horizontal.toFixed(3)}%</p>
           </li>
       </ul>
       </div>`
       var resultado1PecaVertical =
       `<div class="resultado__box">
       <ul type="none">
           <li>
               <h3 class="resultado__medida">${medidasXChapa[0]+10} X ${medidasYChapaA[i]+10}</h3>
           </li>
           <li>
               <p class="resultado__orientacao">Vertical</p>
           </li>
           <li>
               <p class="resultado__quantidade">${quantidadePeca2} Peças</p>
           </li>
           <li>
               <p class="resultado__quantidade">Valor em UND = ${(peca1.pesoSolid / valorPesoChapaA).toFixed(8)}</p>
           </li>
           <li>
               <p class="resultado__perca">${perda1Vertical.toFixed(3)}%</p>
           </li>
       </ul>
       </div>`
       
       


       localResultado.innerHTML += `${resultado1PecaHorizontal}`
       localResultado.innerHTML +=`${resultado1PecaVertical}`
    }


    for(var a=0; a<medidasYChapaB.length; a++){ 
        
       var quantidadePeca3 = Math.round(calcDivisaoPeca(medidasXChapa[1],peca1.medidaXPeca)-0.5) * Math.round(calcDivisaoPeca(medidasYChapaB[a], peca1.medidaYPeca)-0.5)
       var quantidadePeca4 = Math.round(calcDivisaoPeca(medidasXChapa[1],peca1.medidaYPeca )-0.5) * Math.round(calcDivisaoPeca(medidasYChapaB[a],peca1.medidaXPeca)-0.5)
       var valorPesoChapaB = pesoChapa(peca1.espessura, medidasXChapa[1], medidasYChapaB[a])
       var pesoPeca2Horizontal = pesoUnd (valorPesoChapaB, quantidadePeca3)
        var pesoPeca2Vertical = pesoUnd (valorPesoChapaB, quantidadePeca4)
        var perda2Horizontal = ((pesoPeca2Horizontal / peca1.pesoSolid)-1) * 100
        var perda2Vertical = ((pesoPeca2Vertical / peca1.pesoSolid)-1) * 100


        var resultado2PecaHorizontal= `<div class="resultado__box">
        <ul type="none">
            <li>
                <h3 class="resultado__medida">${medidasXChapa[1]+10} X ${medidasYChapaB[a]+10}</h3>
            </li>
            <li>
                <p class="resultado__orientacao">Horizontal</p>
            </li>
            <li>
                <p class="resultado__quantidade">${quantidadePeca3} Peças</p>
            </li>
            <li>
               <p class="resultado__quantidade">Valor em UND = ${(peca1.pesoSolid / valorPesoChapaB).toFixed(8)}</p>
           </li>
            <li>
                <p class="resultado__perca">${perda2Horizontal.toFixed(3)}%</p>
            </li>
        </ul>
        </div>`
        var resultado2PecaVertical = 
        `<div class="resultado__box">
<ul type="none">
    <li>
        <h3 class="resultado__medida">${medidasXChapa[1]+10} X ${medidasYChapaB[a]+10}</h3>
    </li>
    <li>
        <p class="resultado__orientacao">Vertical</p>
    </li>
    <li>
        <p class="resultado__quantidade">${quantidadePeca4} Peças</p>
    </li>
    <li>
               <p class="resultado__quantidade">Valor em UND = ${(peca1.pesoSolid / valorPesoChapaB).toFixed(8)}</p>
           </li>
    <li>
        <p class="resultado__perca">${perda2Vertical.toFixed(3)}%</p>
    </li>
</ul>
</div>`
        
        localResultado.innerHTML +=`${resultado2PecaHorizontal}`
        localResultado.innerHTML +=`${resultado2PecaVertical}`
        
    }
    
   
}