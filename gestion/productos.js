// titulos 
const prodTableTitle = {
    img: 'img',
    video: 'video',
    cod: 'Cod',
    title: 'Titulo',
    cat: 'Categoria',
    precio: 'Precio (UYU)',
    cantidad: 'Cantidad/u',
    med: 'Medida',
    stock: 'Stock',
    medida: 'Medida',
    descripcion: 'Descripción Breve',
    comp: 'Composición'
};


let prodTitle = document.getElementById("prod-title");
prodTitle.innerHTML = '<div class="prod-title"><ul class="gestion-titles"><li>' + prodTableTitle.cod + '</li><li>' + prodTableTitle.img + '</li><li>' + prodTableTitle.video + '</li><li>' + prodTableTitle.titulo + '</li><li>' + prodTableTitle.cat + '</li><li>' + prodTableTitle.precio + '</li><li>' + prodTableTitle.cantidad + '</li><li>' + prodTableTitle.med + '</li><li>' + prodTableTitle.stock + '</li><li>' + prodTableTitle.medida + '</li><li>' + prodTableTitle.descripcion + '</li><li>' + prodTableTitle.comp + '</li></ul></div>';

// contenidos
$(document).ready(
    function() {
        console.log(localStorage.getItem('editar'))
        if(localStorage.getItem('editar')){
            console.log("editar: " + localStorage.getItem('editar'))
            console.log("item a editar: " + localStorage.getItem('id'))
        } else {
            console.log("hubo un error en editar")
        }
        
        let prodContent = document.getElementById("prod-content");   
        let clickeable = new Array()
        let collapsable = new Array()
        let btn_edit = new Array()
        let btn_del = new Array()
         
        $.ajax(
            {
                url: '../api/productos.php',
                type: 'GET',
                success: function(res) {
                    
                   
                    res.forEach(function(el, i){
                        prodContent.innerHTML += 
                            '<tr><td><button class="clickeable" id="clickeable' + [i] + '">+</button></td><td>' + el.id + '</td><td><img class="gestion-img" src="' + el.lnk_img + '"></td><td>' + "sin video" + '</td><td>' + el.nombre + '</td><td>' + "sin categoria" + '</td><td>' + el.precio + '</td><td>' + el.cantidad + '</td><td>' + "no hay med"+ '</td><td>' + el.cantidad + '</td><td>' + "no hay medida" + '</td><td class="fixed-col2"><button id="btn_editar_id_'+el.id+'" class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td class="fixed-col3"><button id="btn_eliminar_id_'+el.id+'" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr><tr><td colspan="10"><div id="collapsable' + [i] + '" class="collapsable">' + el.descripcion + "sin composicion" + '</div></td></tr>';
                        }
                    )
                
            
                   
                    for(let i = 0; i < res.length; i++){
                        btn_del[i] = document.getElementById('btn_eliminar_id_' + res[i].id)
                        btn_edit[i] = document.getElementById('btn_editar_id_' + res[i].id)
                        clickeable[i] = document.getElementById('clickeable' + [i]);
                        collapsable[i] = document.getElementById('collapsable' + [i]);
                        collapsable[i].style.display = "none";

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

                        btn_edit[i].addEventListener("click", function(){
                            localStorage.setItem('editar', 'true');
                            localStorage.setItem('id', res[i].id);
                            document.location.href = "create-product/form-create-product.php?id=" + res[i].id  ;
                            
                        })
                        btn_del[i].addEventListener("click", function(){
                            console.log("eliminar: " + res[i].id)
                            document.location.href = "../api/eliminar-producto.php?id=" + res[i].id ;
                            
                        })
                    }
                }
            });
});


