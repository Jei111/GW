var comprasUsuario1 = [
    {
        cantidad: '5',
        imgProd: '',
        altImgProd: 'imgProd1',
        tituloProd: 'Titulo del producto1',
        cantddxu: '45',
        medidaxu: 'gr/bolsa',
        precioProd: '43'
    }, 
    {
        cantidad: '3',
        imgProd: '',
        altImgProd: 'imgProd2',
        tituloProd: 'Titulo del producto2',
        cantddxu: '505',
        medidaxu: 'kg/bolsa',
        precioProd: '13'
    }, 
    {
        cantidad: '10',
        imgProd: '',
        altImgProd: 'imgProd3',
        tituloProd: 'Titulo del producto3',
        cantddxu: '5',
        medidaxu: 'unidad',
        precioProd: '25'
    }
]

var listaProductosTbody = document.getElementById("lista-productos-tbody");
for(let i=0; i<comprasUsuario1.length; i++){
    listaProductosTbody.innerHTML += 
    '<tr><td>' + comprasUsuario1[i].cantidad + '</td><td>x</td><td><img src="' + comprasUsuario1[i].imgProd + '" alt="' + comprasUsuario1[i].altImgProd + '"></td><td>' + comprasUsuario1[i].tituloProd + '</td><td>' + comprasUsuario1[i].cantddxu + '</td><td>' + comprasUsuario1[i].medidaxu + '</td><td>$</td><td>' + comprasUsuario1[i].precioProd + '</td><td>$</td><td>' + comprasUsuario1[i].cantidad * comprasUsuario1[i].precioProd + '</td><td><button><i class="bi bi-trash-fill"></i></button></td><td><button>-</button></td><td><input type="number" value="' + comprasUsuario1[i].cantidad + '" style="width: 80px;"></td><td><button>+</button></td></tr>'
}

// secciones 
var datosCompraEnvio = document.getElementById("datos-compra-envio");
var medioDePago = document.getElementById("medio-de-pago");


// cuando click en button appear sección
function closeDatosCompraEnvio(){
    datosCompraEnvio.style.display = "none";
    medioDePago.style.display = "none";
    console.log("datosCompraEnvio.style.display", datosCompraEnvio.style.display);
    console.log("medioDePago.style.display", medioDePago.style.display);
}

function openDatosCompraEnvio(){
    datosCompraEnvio.style.display = "block";
    medioDePago.style.display = "none";
    console.log("datosCompraEnvio.style.display", datosCompraEnvio.style.display);
    console.log("medioDePago.style.display", medioDePago.style.display);
}

function closeMedioDePago(){
    datosCompraEnvio.style.display = "block";
    medioDePago.style.display = "none";
    console.log("datosCompraEnvio.style.display", datosCompraEnvio.style.display);
    console.log("medioDePago.style.display", medioDePago.style.display);
}

function openMedioDePago(){
    datosCompraEnvio.style.display = "block";
    medioDePago.style.display = "block";
    console.log("datosCompraEnvio.style.display", datosCompraEnvio.style.display);
    console.log("medioDePago.style.display", medioDePago.style.display);
}
