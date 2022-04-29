var espessuraGalvanizado = ["0.50mm" , "0.95mm" , "1.25mm", "1.95mm", "2.70mm"]

var espessuraInox304 = ["0.80mm" , "1.20mm" , "1.50mm", "2mm", "4mm"]

var material = document.getElementById('material')
var espessura = document.getElementById('espessura')
function seletorMaterial(){
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
