// ------------------- CONTENIDO MENSAJES -------------------

// titulos 
var mensajesTableTitle = {
    remitente: 'remitente',
    asunto: 'asunto',
    fecha: 'fecha',
    mensaje: 'mensaje'
};

var mensajesTitle = document.getElementById("mensaje-title");
mensajesTitle.innerHTML = '<div class="mensaje-title"><ul class="gestion-titles"><li>' + mensajesTableTitle.remitente + '</li><li>' + mensajesTableTitle.asunto + '</li><li>' + mensajesTableTitle.fecha + '</li><li>' + mensajesTableTitle.mensaje + '</li><div class="mensajes-title-collapsable"><button>Eliminar Todos</button><button>Marcar como Leídos</button><button>Marcar como No Leidos</button></div></ul></div>';

// contenidos
$(document).ready(
    function() {

        var mensajesTableContent = new Array();

        var mensajesContent = document.getElementById("mensaje-content");   
        var mensajesClickeable = new Array();
        var mensajesCollapsable = new Array();
        console.log(mensajesClickeable.length);
        $.ajax(
            {
                url: '../api/productos.php',
                type: 'GET',
                success: function(res) {
                    console.log(res)
                    mensajesTableContent = res

                    res.forEach(function(el, i){
                        mensajesContent.innerHTML += 
                            '<tr><td><button class="clickeable" id="mensajes-clickeable' + [i] + '">+</button></td><td>' + el.remitente + '</td><td>' + el.asunto + '</td><td>' + el.fecha + '</td></tr><tr><td colspan="10"><div id="collapsable' + [i] + '" class="collapsable">' + el.mensaje + "sin composicion" + '</div></td></tr><tr><td><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td><td><button class="btn btn-outline-success">Responder</button></td></tr>';
                        }
                    )
        
                    for(let i = 0; i < mensajesTableContent.length; i++){

                        mensajesClickeable[i] = document.getElementById('mensajes-clickeable' + [i]);
                        mensajesCollapsable[i] = document.getElementById('mensajes-collapsable' + [i]);
                        mensajesCollapsable[i].style.display = "none";

                        clickeable[i].addEventListener(
                            "click", function(){
                                if(collapsable[i].style.display == "none"){
                                    collapsable[i].style.display = "block"; 
                                    console.log("clickeable " + [i] + " if", collapsable[i].style.display)  
                                } else {
                                    collapsable[i].style.display ="none";
                                    console.log("clickeable " + [i] + " else", collapsable[i].style.display)  
                                }
                            }
                        );
                    }
                }
            }
        );
    }
);
   