
var espessuraGalvanizado = [0.50 , 0.95 , 1.25, 1.95, 2.70]
var espessuraInox304 = [0.80 , 1.20 , 1.50, 2, 4]
var espessuraInox430 = [0.5, 0.8, 1.2, 2]
var espessuraChapaPreta = [4.75]

export function seletorMaterial(){
    
    if(material.selectedIndex === 0){
        espessura.innerHTML = ''
        } else if (material.selectedIndex === 1 ){
            espessura.innerHTML = ''
        for(var i=0; i<espessuraGalvanizado.length; i++){
            espessura.innerHTML += `
        <option value="${espessuraGalvanizado[i]}" class="valorEspessura">${espessuraGalvanizado[i]}</option>
        `
        }
    } else if( material.selectedIndex === 2){
        espessura.innerHTML = ''
        for(var i=0; i<espessuraInox304.length; i++){
            espessura.innerHTML += `
        <option value="${espessuraInox304[i]}" class="valorEspessura">${espessuraInox304[i]}</option>
        `
        }
    }else if(material.selectedIndex === 3){
        espessura.innerHTML = ''
        for(var i=0; i<espessuraInox430.length; i++){
            espessura.innerHTML += `
        <option value="${espessuraInox430[i]}" class="valorEspessura">${espessuraInox430[i]}</option>
        `
    }
    
    }else if(material.selectedIndex === 4){
        espessura.innerHTML = ''
        for(var i=0; i<espessuraChapaPreta.length; i++){
            espessura.innerHTML += `
        <option value="${espessuraChapaPreta[i]}" class="valorEspessura">${espessuraChapaPreta[i]}</option>
        `
    }
}
}



