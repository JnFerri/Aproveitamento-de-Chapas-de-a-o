
import {espessuraGalvanizado, espessuraInox304} from "./Chapa.js"
function seletorMaterial(){
    var espessura = document.getElementById('espessura')
if(material.selectedIndex === 1 ){
    espessura.innerHTML = ''
    for(i=0; i<espessuraGalvanizado.length; i++){
        espessura.innerHTML += `
    <option value="${espessuraGalvanizado[i]}" class="valorEspessura">${espessuraGalvanizado[i]}</option>
    `
    }
} else if( material.selectedIndex === 2){
    espessura.innerHTML = ''
    for(i=0; i<espessuraInox304.length; i++){
        espessura.innerHTML += `
    <option value="${espessuraInox304[i]}" class="valorEspessura">${espessuraInox304[i]}</option>
    `
    }
}

}

export{seletorMaterial, espessura, material}
