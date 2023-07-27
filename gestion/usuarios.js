
// ------------------- CONTENIDO USUARIOS -------------------


var usuTableTitle = {
    username: 'img',
    nombre: 'video',
    apellido: 'Cod',
    email: 'Titulo',
    telefono: 'Categoria',
    direccion: 'en el cariba abajo de la palmera de  patitas cruzadas tomando piña colada', 
    fechanac: 'Fecha Nacimiento'
};

var usuTitle = document.getElementById("usu-title");
usuTitle.innerHTML = '<div class="usu-title"><ul class="gestion-titles"><li>' + usuTableTitle.username + '</li><li>' + usuTableTitle.nombre + '</li><li>' + usuTableTitle.apellido + '</li><li>' + usuTableTitle.email + '</li><li>' + usuTableTitle.telefono + '</li><li>' + usuTableTitle.direccion + '</li><li>' + usuTableTitle.fechanac + '</li></ul></div>';

// contenidos
$(document).ready(
    function() {

       

        var usuContent = document.getElementById("usu-content");   
        var usuClickeable = new Array();
        var usuCollapsable = new Array();
        console.log(usuClickeable.length);

        $.ajax(
            {
                url: '../api/usuarios.php',
                type: 'GET',
                success: function(res) {
                    console.log(res)
               

                    res.forEach(function(el, i){
                        usuContent.innerHTML += 
                        '<tr><td><button class="clickeable" id="usu-clickeable' + [i] + '">+</button></td><td>' + el.id + '</td><td><img class="gestion-img" src="' + el.profilepic + '"></td><td>' + el.username + '</td><td>' + el.email + '</td><td>' + el.categoria + '</td><td>' + el.nombre + '</td><td>' + el.apellido + '</td><td>' + el.fechaNac + '</td><td>' + el.pais + '</td><td class="fixed-col2"><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td class="fixed-col3"><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr>';
                        }
                    )
                }
            }
        );

    }
);
