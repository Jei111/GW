// ------------------- INFO -------------------

// BUSCAR 
// busca mientras escribe y filtros: https://github.com/vdrr89/pagApiFil/blob/master/pag%20con%20api%20y%20filtro%202/vr-api.js

// ------------------- TITULO -------------------

// SUBTITULO
var tituloSubtitulo = document.getElementById("titulo-subtitulo");
tituloSubtitulo.innerHTML = "Tu tienda de cultivo online!";

// ------------------- NAVBAR -------------------
var loginBtn = document.getElementById("login-btn");
var loginSuccessfulAlert = document.getElementById("login-successful-alert");

// ------------------- ABOUT -------------------
var aboutTxt = document.getElementById("about");
aboutTxt.innerHTML = '<h3>Sobre Nosotros</h3><p><b>Grownline</b> surge de la idea de que a tod@s nos interesa el cultivo, y por lo tanto acceder a insumos, asesoría, experiencia de gente <span style="color: #1abc9c;">"delaplanta"</span>.<br><br>Como cultivador tuve dificultades para encontrar un "Grow" de cabecera, es entonces cuando decidí convertirme en uno.<br><br>Con más de 15 años de experiencia en el cultivo de Ganjah, decidí acercarme a los cultivadores con precios accesibles, interés real, y respuestas a sus necesidades. Sin local comercial, por vía digital.<br><br>Quienes han confiado en <b>Grownline</b> saben y recomiendan la calidad de nuestros servicios. En resumen, todos somos <b>Grownline</b>. Gracias por apoyar y ser parte de esto.<br><br>Buenos Humos...!</p>';

// ------------------- PRODUCTOS: ICONOS -------------------
// serie de iconos
var iconsProducts = [
    { 
        nombre: "cannabis", 
        icon: "fas fa-cannabis", 
        function: "openCannabisSlides"
    },
    { 
        nombre: "tierra", 
        icon: "fas fa-mountain", 
        function: "openTierraSlides"
     },
    { 
        nombre: "complementos", 
        icon: "fas fa-cloud-meatball", 
        function: "openComplementosSlides" 
    },
    { 
        nombre: "comida", 
        icon: "fas fa-utensils", 
        function: "openComidaSlides"
    }, 
    {
        nombre: "more",
        icon: "fas fa-plus", 
        function: "openMoreProducts"
    }
]; 

var iconProducts = document.getElementById("icon-productos");
var iconsProductsLength = iconsProducts.length;

for( let i = 0; i < iconsProductsLength; i++ ){
    iconProducts.innerHTML +=
    '<div class="cat-btn"><i onclick="' + iconsProducts[i].function + '()" class="cat-i ' + iconsProducts[i].icon + '"></i></div>'
  }

// secciones 
// grupo de secciones desplegable
var sectionGroup = document.getElementById("section-group");

// cada seccion 
var cannabisSection = document.getElementById("cannabis-section");
var tierraSection = document.getElementById("tierra-section");
var complementosSection = document.getElementById("complementos-section");
var comidaSection = document.getElementById("comida-section");

var cannabisSlides = [
    { name:'cannabis1', src: 'img/weed01.jpeg' },
    { name:'cannabis2', src: 'img/weed02.jpeg' }, 
    { name:'cannabis3', src: 'img/weed03.jpeg' },
]

var tierraSlides = [
    { name:'tierra1', src: 'img/top-crop/top-crop-1.jpg' },
    { name:'tierra2', src: 'img/top-crop/top-crop-1.jpg' }, 
    { name:'tierra3', src: 'img/top-crop/top-crop-1.jpg' },
]

var complementosSlides = [
    { name:'complementos1', src: 'img/solid-gold-post-2.jpg' },
    { name:'complementos2', src: 'img/solid-gold-post1.jpg' }, 
    { name:'complementos3', src: 'img/solid-gold-post-2.jpg' },
]

var comidaSlides = [
    { name:'comida1', src: 'img/seeds01.jpeg' },
    { name:'comida2', src: 'img/weed04.jpg' }, 
    { name:'comida3', src: 'img/seeds01.jpeg' },
]

for( let i = 0; i < cannabisSlides.length; i++ ){
    cannabisSection.innerHTML += 
    '<div class="products-slide"><img src="' + cannabisSlides[i].src + '" alt="' + cannabisSlides[i].name + '"></div>'
}

for( let i = 0; i < tierraSlides.length; i++ ){
    tierraSection.innerHTML += 
    '<div class="products-slide"><img src="' + tierraSlides[i].src + '" alt="' + tierraSlides[i].name + '"></div>'
}

for( let i = 0; i < complementosSlides.length; i++ ){
    complementosSection.innerHTML += 
    '<div class="products-slide"><img src="' + complementosSlides[i].src + '" alt="' + complementosSlides[i].name + '"></div>'
}

for( let i = 0; i < comidaSlides.length; i++ ){
    comidaSection.innerHTML += 
    '<div class="products-slide"><img src="' + comidaSlides[i].src + '" alt="' + comidaSlides[i].name + '"></div>'
}
 
function openCannabisSlides(){
    if(cannabisSection.style.display === "none"){
        cannabisSection.style.display = "inline-block";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        console.log("openCannabisSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        console.log("openCannabisSlides else")
    }
}

function openTierraSlides(){
    if(tierraSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "inline-block";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        console.log("openTierraSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        console.log("openTierraSlides else")
    }
}

function openComplementosSlides(){
    if(complementosSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "inline-block";
        comidaSection.style.display = "none";
        console.log("openComplementosSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        console.log("openComplementosSlides else")
    }
}

function openComidaSlides(){
    if(comidaSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "inline-block";
        console.log("openComidaSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        console.log("openComidaSlides else")
    }
}


function openMoreProducts(){
    window.open("productos/productos.html", "_self");
}

// scroll horizontal para categorias del home  
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); // Delta vale 1 en scroll hacia arriba y -1 en scroll hacia abajo
    
    sectionGroup.scrollLeft -= (delta*40); // De cuantos pixeles haremos el scroll lateral;
    console.log("Delta: " + delta); 
    console.log("sectionGroup ScrollLeft: " + sectionGroup.scrollLeft);
    console.log("sectionGroup offsetWidth: " + sectionGroup.offsetWidth);
    console.log("ScrollLeft + offsetWidht: " + (sectionGroup.scrollLeft + sectionGroup.offsetWidth));
    console.log("sectionGroup offsetWidth: " + sectionGroup.offsetWidth);
    console.log("sectionGroup scrollWidth: " + sectionGroup.scrollWidth);
    if ((delta > 0 && sectionGroup.scrollLeft > 0) || (delta < 0 && (sectionGroup.offsetWidth + sectionGroup.scrollLeft) < (sectionGroup.scrollWidth - 1))) {
      e.preventDefault();
    }
  }
  
  // Si hay event listener quiere decir que no estamos en IE
  //if (container.addEventListener) {
    // IE9, Chrome, Safari, Opera
    sectionGroup.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    sectionGroup.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  // } else {
    // IE 6/7/8
    // sectionGroup.attachEvent("onmousewheel", scrollHorizontally); // este estaba jodiendo a que no apareciera el faq
  // }


// ------------------- FAQ -------------------
var faqList = document.getElementById("faq-list");
let faqContent = [
    { titulo: 'Titulo de faq', respuesta: 'Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v' },
    { titulo: 'Titulo de faq', respuesta: 'Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v' },
    { titulo: 'Titulo de faq', respuesta: 'Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v' },
    { titulo: 'Titulo de faq', respuesta: 'Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v' }
];

for( let j = 0; j < faqContent.length; j++ ){
    faqList.innerHTML +=
    '<li><p class="faq-tit">' + faqContent[j].titulo + '</p><p>' + faqContent[j].respuesta + '</p></li>' 
}



// ------------------- CONTACTO: REDES SOCIALES -------------------
var socialNet = document.getElementById("social-networks");
var socialNetworks = [
    { name: "facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/LinndorfoCorteza" },
    { name: "instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/tu_tienda_de_cultivos/" },
    { name: "mail", icon: "bi bi-envelope-fill", link: "mailto:grownline@hotmail.com" },
    { name: "whatsapp", icon: "bi bi-whatsapp", link: "https://api.whatsapp.com/send?phone=59892219472" }
];
var socialNetworksLength = socialNetworks.length;

for( let i = 0; i < socialNetworksLength; i++ ){
    socialNet.innerHTML +=
    '<li><a target="_blank" href="' + socialNetworks[i].link + '"><i class="footer-icon ' + socialNetworks[i].icon + '"></i></a></li>' 
}