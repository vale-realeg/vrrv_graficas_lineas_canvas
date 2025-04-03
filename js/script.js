const canvas = document.getElementById("lineChart");
const ctx = canvas.getContext("2d");

//DATOS DE LA GRÁFICA
const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const sanSalvador = [30, 32, 34, 35, 36, 37, 36, 35, 34, 32, 31, 30];
const santaTecla = [25, 26, 28, 29, 31, 32, 32, 31, 30, 28, 27, 26];

//MARGENES BORDES IZQUIERDO Y DERECHO
const marginLeft = 50;
const marginRigth = 50;

//FUNCIÓN PARA DIBUJAR LA LINEA CON ETIQUETAS
function drawLineWithLebels(data,color){
    ctx.beginPath(); //SE COLOCA EL PUNTERO EN EL LIENZO
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;

    for(let i=0; i<data.length; i++){
        //INICIAR Y FINALIZAR EN LOS BORDES ESTABLECIDOS DEL LIENZO
        const x = (i/(data.length-1)) * (canvas.width - marginLeft - marginRigth) + marginLeft;
        const y = canvas.height - (data[i]-15) * 10; //ESCALADO VERTICAL
                                  //arreglo 15 px * 10px
        //DIBUJAR LA LINEA
        if (i===0){
            ctx.moveTo(x,y); //UBICAR POSICION DEL PUNTERO
        }else{
            ctx.lineTo(x,y); //TRAZAR LINEA A POSICION CALCULADA EN "X" "Y"
        }

        ctx.fillStyle = color; //ASIGNAR COLOR A LA LINEA
        ctx.font = "12px Arial"; //ESTILO DE TEXTO (etiquetas dentro de gráfica)
        ctx.fillText(data[i]+"°C", x+5, y-5); //VALOR A MOSTRAR EN LA ETIQUETA EN SUS RESPECTIVOS EJES
    }
    ctx.stroke(); //DIBUJAR
}

//FUNCIÓN PARA DIBUJAR LAS ETIQUETAS Y LOS EJES
function drawAxes() {
    ctx.beginPath();
    ctx.strokeStyle ="#000"
    ctx.lineWidth=1;

     //EJE X
    ctx.moveTo(50,canvas.height-50); //UBICAR LA POSICION DEL PUNTERO EN LOS EJES
    ctx.lineTo(canvas.width-50,canvas.height-50); //TRAZAR LA LINEA EN UNA POSIICON ESPECÍFICA

    //EJE Y
    ctx.moveTo(50,canvas.height-50);
    ctx.lineTo(50,50);

    //DIBUJAR
    ctx.stroke();

    //ETIQUTAS EN EJE X
    for (let i=0; i< labels.length; i++){ //SE RECORRE EL ARREGLO DE ETIQUETAS
        const x = (i/(labels.length-1))*(canvas.width - 100) + 50; 
        ctx.fillText(labels[i],x,canvas.height -30); 
    }

    //ETIQUETAS EN EJE Y
    for(let i=20; i<=40; i+=5){
        const y = canvas.height - 50 - (i-20) * 10; //POSICIÓN DE CADA GRADO CENTIGRADO, IRA DECREMENTANDO
        ctx.fillText(i+"°C",20, y+5); //DIBUJAR
    }
}

drawAxes();//DIBUJAR LOS EJES X e Y
drawLineWithLebels(sanSalvador,'red'); //LINEA ROJA PARA SAN SALVADOR
drawLineWithLebels(santaTecla,'blue'); //LINEA AZUL PARA SANTA TECLA

//LEYENDA DE LA GRÁFICA
ctx.fillStyle = 'red';
ctx.fillRect(70,20,10,10,); //DIBUJAR UN RECTNGULO CON LAS MEDIDAS ESPECIFICADAS EN PX
ctx.fillStyle = 'black';
ctx.fillText("San Salvador",85,30) // COLOCAR EL TEXTO EN LA POSICION ESTABLECIDA EN PX

ctx.fillStyle = 'blue';
ctx.fillRect(170,20,10,10,); //DIBUJAR UN RECTNGULO CON LAS MEDIDAS ESPECIFICADAS EN PX
ctx.fillStyle = 'black';
ctx.fillText("Santa Tecla",185,30) // COLOCAR EL TEXTO EN LA POSICION ESTABLECIDA EN PX