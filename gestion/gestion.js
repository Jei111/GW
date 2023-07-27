// ------------------- FUNCION LOGIN -------------------

// let login = document.getElementById("login-form");

let allTabs = document.getElementById("gestion-tabs");

let productos = document.getElementById("gestion-productos");
let usuarios = document.getElementById("gestion-usuarios");
let mensajes = document.getElementById("gestion-mensajes");
let ventas = document.getElementById("gestion-ventas");
let posts = document.getElementById("gestion-posts");
let pagina = document.getElementById("gestion-pagina");


// let emailInput = document.getElementById("floatingInput");
// let passwordInput = document.getElementById("floatingPassword");

// // ------------------- FORMULARIO -------------------
// //  ENVIAR FORMULARIO
// function okLogin(e){
//    login.style.display = "none";
//     allTabs.style.display = "block";
//     productos.style.display = "block";
//     usuarios.style.display = "none";
//     mensajes.style.display = "none";
//     ventas.style.display = "none";
//     console.log("okLogin")
//     console.log("mierda")
// }
// // agregar en okLogin enviar formulario y verificar

// // BORRAR FORMULARIO
// function deleteLoginForm(){
//     emailInput.value = "";
//     passwordInput.value = "";
//     console.log("deleteLoginForm");
//     // VDRR89 mostrar boton con flecha para ir para atras el cual tendria link para ir para atras
// }
// ------------------- FUNCIONES TABS -------------------

// TAB PRODUCTOS
function tabProductos(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "block";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "none";
    postsFilterAdd.style.display = "none";
    paginaFilterAdd.style.display = "none";
    console.log("tabProductos")
    // VDRR89 modificar estilo de fuente y background de tab
}

// TAB USUARIOS
function tabUsuarios(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "block";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "none";
    console.log("tabUsuarios")
}

// TAB MENSAJES
function tabMensajes(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "none";
    console.log("tabMensajes")
}

// TAB VENTAS
function tabVentas(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "block";
    posts.style.display = "none";
    pagina.style.display = "none";
    console.log("tabVentas")
}

// TAB POSTS
function tabPosts(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "block";
    pagina.style.display = "none";
    console.log("tabPosts")
}

// TAB PAGINA
function tabPagina(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "block";
    console.log("tabPagina")
}

$(document).ready(function() {

  
    tabProductos()
    console.log("algoo")
    /*
    $.ajax({
        url: '../api/usr.php',
        type: 'GET',
        success: function(response)  {
            usr = response.usr
            admin = response.admin
            console.log ("usr: " + usr + "  admin: " + admin)
            if (admin == 'v'){
                okLogin()
            }
        }
    })
    */
})


