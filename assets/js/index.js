var calcDivisaoPeca1 = ( medidaXchapa, medidaXpeca ) => medidaXchapa / medidaXpeca

var calcDivisaoPeca2 = ( medidaYchapa, medidaYpeca ) => medidaYchapa / medidaYpeca


var material = document.getElementById('material')

function seletorMaterial(){

materialSelecionado = material.options[material.selectedIndex].text;

if(materialSelecionado == 'Galvanizado'){
    console.log("foi selecionado galvanizado")
}

}


