let canvas = document.getElementById('canvas');
let lienzo = canvas.getContext("2d");

let boton = document.getElementById("boton")
let cuadroTexto = document.getElementById("txt_numero")

let ancho = document.getElementById('ancho');
let alto = document.getElementById('alto');


boton.addEventListener('click', dibujoPorClick)

// Funcion para dibujar una linea recta
function dibujarLinea(color, x1, y1, x2, y2){
    lienzo.beginPath();
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.strokeStyle = color;
    lienzo.stroke();
    lienzo.closePath();
}

function tamañoLienzo(){
    let anchoLienzo = ancho.value;
    let altoLienzo = alto.value

    canvas.setAttribute('width', anchoLienzo + 'px');
    canvas.setAttribute('height', altoLienzo + 'px');
}
function dibujoPorClick(){

    tamañoLienzo()

    let anchoLienzo = canvas.width;
    let altoLienzo = canvas.height;
    let numeroLineas = cuadroTexto.value;
    let espacioHorizontal =  anchoLienzo / numeroLineas;
    let espacioVertical = altoLienzo / numeroLineas;

    for (let l = 0; l < numeroLineas; l++) {

        let yi = l * espacioVertical;
        let xf = espacioHorizontal * (l+1);

        dibujarLinea("red", 0, yi, xf, altoLienzo);
    }

    for (let r = 0; r < numeroLineas; r++){
        let xi = r * espacioHorizontal;
        let yf = altoLienzo - (r+1) * espacioVertical;
    
        dibujarLinea("purple", xi, altoLienzo, anchoLienzo, yf);
    }
}

