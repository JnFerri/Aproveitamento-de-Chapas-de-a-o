import { Peca } from "./Peca.js"
import {publicarFooter} from "./footer.js"
import {publicarHeader} from "./header.js"
import {seletorMaterial} from "./seletorMateriaEspessura.js"
import { calcularTudo } from "./calculo.js"


var footer = document.querySelector('footer')

document.onload = publicarHeader()

var material = document.getElementById('material')
var espessura = document.getElementById('espessura')
material.addEventListener("click", seletorMaterial)

document.getElementById('botaoFormulario').addEventListener("click", calcularTudo)
    

