let admin;
let usr;    
let frm_login = document.getElementById("login-form-popup")
let frm_usr_lgd = document.getElementById("user-form-logueado")

let btn_login = document.getElementById("send-login")
let btn_logout = document.getElementById("btn-logout")
let login_btn_sin_sesion = document.getElementById("login-btn-sin-sesion")
let login_btn_con_sesion = document.getElementById("login-btn-con-sesion")

$(document).ready(function() {

    login_btn_sin_sesion.style.display = "none"
    login_btn_con_sesion.style.display = "none"
    frm_login.style.display = "none"
    frm_usr_lgd.style.display = "none"

    $.ajax({
        url: '../api/usr.php',
        type: 'GET',
        success: function(response){
            usr = response[0].usr 
            admin = response[0].admin
            $('#nombre-de-usuario').html(usr)
            //console.log("usuario: " + usr)
            //console.log("admin: " + admin)
            
            if(usr == "invitado" && admin == 'f'){
                console.log("sesion de invitado")
                login_btn_sin_sesion.style.display = "block"

                login_btn_sin_sesion.addEventListener("click", function(){
                    if(frm_login.style.display === "none"){
                        frm_login.style.display = "block"
                    }else{
                        frm_login.style.display = "none"
                    }
                });
            
            }else if(usr != "invitado" && admin == 'f'){
                console.log("hay usuario logeadooo")
                console.log("usuario: " + usr)
                login_btn_con_sesion.style.display = "block"
            
                login_btn_con_sesion.addEventListener("click", function(){
                    if(frm_usr_lgd.style.display === "none"){
                        frm_usr_lgd.style.display = "block"
                    }else{
                        frm_usr_lgd.style.display = "none"
                    }
                })
            
            }else if(usr != "invitado" && admin == 'v'){
                login_btn_con_sesion.style.display = "block"
            
                login_btn_con_sesion.addEventListener("click", function(){
                    if(frm_usr_lgd.style.display === "none"){
                        frm_usr_lgd.style.display = "block"
                    }else{
                        frm_usr_lgd.style.display = "none"
                    }
                })                
                
                if(screen.width <= 768){
                    let template = `
                        <div>
                            <a class="vr-nav-link" href="gestion/gestion.html">
                                GESTIÓN ADMIN
                            </a>
                        </div> `;
                        $("#responsive-menu").append(template)

                } else if(screen.width > 768){
                    let template = `
                        <li id="gestion">
                            <a class="vr-nav-link" href="gestion/gestion.html">
                                GESTIÓN ADMIN
                            </a>
                        </li> `;
                       $("#navbar-list").append(template)

                }
                //alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)
                               
            }
            
        },
        error: function(){
            console.log("error en ajax")
        }
    }); 

    btn_login.addEventListener("click", function(){
        const postDatos = {
            nom_usr: $('#emailInput').val(),
            pass: $('#floatingPassword').val(),
        };

        $.ajax({
            url: '../api/login.php',
            data: postDatos,
            type: 'POST',
            success: function (response){
                console.log(response)
                document.location.href = "index.html"
            },
            error: function(){
                console.log("errorrrrr al ajax")
            }
        })
    })

    btn_logout.addEventListener("click", function(){
        $.ajax({
            url: '../api/cerrar-sesion.php',
            type: 'GET',
            success: function() {
                document.location.href = "../index.html"
            }
          });
    })   
})