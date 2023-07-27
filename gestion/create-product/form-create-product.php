<?php 
include_once '../../api/db.php';

if(isset($_GET['id'])){ 
    $id = $_GET['id'];
    $resp = mysqli_fetch_assoc(obtener("select * from prod where id=$id")); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grownline</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <!-- Icons: 1 Bootstrap - 2 Fontawesome-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script src="https://kit.fontawesome.com/a9f99944df.js" crossorigin="anonymous"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="../../css/fuentes.css" type="text/css"> 
    <link rel="stylesheet" href="../../css/style.css" type="text/css"> 
    <link rel="stylesheet" href="form-create-product.css" type="text/css">
</head>
<body>
    
    <!-- ------------------- NavBar ------------------- -->

    <nav class="vr-navbar">
        <ul>
            <a href="../../index.html"><li class="navbar-logo"></li></a> 

            <li><a class="vr-nav-link active special" href="../../index.html#about">Quienes somos</a></li> 

            <li class="vr-nav-item dropdown">
                <a class="vr-nav-link dropdown-toggle special" href="../../index.html#productos" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="vr-nav-item dropdown-item special" href="">Categoria1</a></li> 
                  <li><a class="vr-nav-item dropdown-item special" href="">Categoria2</a></li> 
                  <li><a class="vr-nav-item dropdown-item special" href="">Categoria3</a></li> 
                </ul>
              </li>

            <li><a class="special" href="../../index.html#contacto">Contacto</a></li> 
            <li><a class="special" href="../../index.html#faq">FAQ</a></li> 
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar">
            <button class="btn btn-green-inverted" type="submit">Buscar</button>
            <a href="../gestion.html"><button type="button" class="btn btn-green-inverted"><i class="fas fa-user"></i></button></a> 
        </form>
    </nav>

    <!-- ------------------- Create Product Form ------------------- -->
    <form action="../../api/editar-producto.php?id=<?php echo $id; ?>" method="POST" enctype="multipart/form-data">
    
    <div id="create-form" class="create-form">
       <div class="input-group">
             <!-- codigo -->
            <div id="cod-input" class="form-floating mb-3">
                <input type="number" name="codigo" class="form-control" id="codigo" placeholder="código">
                <label for="codigo">Código</label>
            </div>
            <span class="input-group-addon"></span>
            <!-- categoría -->
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

        </div>

        <!-- titulo -->
        <div id="titulo"  class="form-floating">
            <input type="text" name="nombre" class="form-control" id="titulo-input" placeholder="Título" value="<?php echo $resp['nombre']; ?>">
            <label for="titulo-input">Titulo</label>
        </div>

        <div class="input-group">
            <!-- image mini -->
            <span class="input-group-addon"></span>
            <div id="imgmini-input"  class="imgmini-input">
                <!-- contenido del input en form-create-product.js -->
            </div>
            <span class="input-group-addon"></span>
            <!-- image url -->
            <div id="imgurl-input"  class="form-floating">
                <input type="file" name="img_prod" class="form-control" id="imageurl" placeholder="imagen url" value="<?php echo $resp['lnk_img']; ?>">
                <label for="imageurl">Imagen URL</label>
            </div>
            <span class="input-group-addon"></span>
            <!-- video mini -->
            <div id="videomini-input"  class="videomini-input">
                <!-- contenido del input en form-create-product.js -->
            </div>
            <!-- video url -->
            <div id="videourl-input"  class="form-floating">
                <input type="text" name="video" class="form-control" id="videourl" placeholder="video url">
                <label for="videourl">Video URL</label>
            </div>
        </div>

        <div class="input-group">
            <!-- precio -->
            <div id="prec-input" class="form-floating mb-3">
                <input type="number" name="precio" class="form-control" id="precio" placeholder="Precio" value="<?php echo $resp['precio']; ?>">
                <label for="precio">Precio</label>
            </div>
            <span class="input-group-addon"></span>
            <!-- presentacion -->
            <div id="cantu-input" class="form-floating mb-3">
                <input type="number" class="form-control" id="cantidadu" placeholder="Cantidad / Unidad">
                <label for="cantidadu">Presentacion</label>
            </div>
            <span class="input-group-addon"></span>
            <span class="input-group-addon"></span>
            <!-- stock -->
            <div id="stock-input" class="form-floating mb-3">
                <input type="number" name="cantidad" class="form-control" id="stock" placeholder="Stock" value="<?php echo $resp['cantidad']; ?>">
                <label for="stock">Stock</label>
            </div>
        </div>

        <!-- descripcion -->
        <div id="desc-input" class="form-floating">
            <textarea class="form-control" name="descripcion" placeholder="Descripción" id="descripcion" style="height: 100px"><?php echo $resp['descripcion']; ?></textarea>
            <label for="descripcion">Descripción</label>
        </div>

        <!-- go back -->
        <a href="../gestion.html">
            <button id="btn-back" type="button" class="btn btn-outline-danger btn-left btn-back"><i class="fas fa-reply"></i></button>
        </a>
        <!-- eliminar -->
        <button id="btn-delete" type="button" class="btn btn-outline-danger btn-left btn-delete"><i class="bi bi-trash-fill"></i></button>
        <!-- enviar -->
        <button id="btn-send" type="submit" name="agregar_prod" class="btn btn-outline-success btn-right btn-send"><i class="fas fa-paper-plane"></i></button>
        
    </div>
    </form>

    

    <!-- ------------------- FOOTER ------------------- -->
    <div id="footer" class="flex-waves-content content-waves">

        <!--Waves Container-->
        <div class="waves-background">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#000" />
                </g>
            </svg>
        </div>

        <div class="footer-content">
            <h3 class="footer-title">Seguinos en nuestras redes!</h3><br>
            <ul id="social-networks" class="footer-ul">
            </ul>  
        </div>

    </div>

    <!-- Bootstrap Js and Popper -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

    <!-- Mis scripts -->
    <script src="/jquery.js"></script>
    <script src="productos.js"></script>

 

</body>
</html>







<?php }elseif(!isset($_GET['id'])){ ?>







<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grownline</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <!-- Icons: 1 Bootstrap - 2 Fontawesome-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script src="https://kit.fontawesome.com/a9f99944df.js" crossorigin="anonymous"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="../../css/fuentes.css" type="text/css"> 
    <link rel="stylesheet" href="../../css/style.css" type="text/css"> 
    <link rel="stylesheet" href="form-create-product.css" type="text/css">
</head>
<body>
    
    <!-- ------------------- NavBar ------------------- -->

    <nav class="vr-navbar">
        <ul>
            <a href="../../index.html"><li class="navbar-logo"></li></a> 

            <li><a class="vr-nav-link active special" href="../../index.html#about">Quienes somos</a></li> 

            <li class="vr-nav-item dropdown">
                <a class="vr-nav-link dropdown-toggle special" href="../../index.html#productos" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="vr-nav-item dropdown-item special" href="">Categoria1</a></li> 
                  <li><a class="vr-nav-item dropdown-item special" href="">Categoria2</a></li> 
                  <li><a class="vr-nav-item dropdown-item special" href="">Categoria3</a></li> 
                </ul>
              </li>

            <li><a class="special" href="../../index.html#contacto">Contacto</a></li> 
            <li><a class="special" href="../../index.html#faq">FAQ</a></li> 
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar">
            <button class="btn btn-green-inverted" type="submit">Buscar</button>
            <a href="../gestion.html"><button type="button" class="btn btn-green-inverted"><i class="fas fa-user"></i></button></a> 
        </form>
    </nav>

    <!-- ------------------- Create Product Form ------------------- -->
    <form action="../../api/guardar-nuevo-producto.php" method="POST" enctype="multipart/form-data">
    
    <div id="create-form" class="create-form">
       <div class="input-group">
             <!-- codigo -->
            <div id="cod-input" class="form-floating mb-3">
                <input type="number" name="codigo" class="form-control" id="codigo" placeholder="código">
                <label for="codigo">Código</label>
            </div>
            <span class="input-group-addon"></span>
            <!-- categoría -->
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

        </div>

        <!-- titulo -->
        <div id="titulo"  class="form-floating">
            <input type="text" name="nombre" class="form-control" id="titulo-input" placeholder="Título">
            <label for="titulo-input">Titulo</label>
        </div>

        <div class="input-group">
            <!-- image mini -->
            <span class="input-group-addon"></span>
            <div id="imgmini-input"  class="imgmini-input">
                <!-- contenido del input en form-create-product.js -->
            </div>
            <span class="input-group-addon"></span>
            <!-- image url -->
            <div id="imgurl-input"  class="form-floating">
                <input type="file" name="archivo" class="form-control" id="imageurl" placeholder="imagen url">
                <label for="imageurl">Imagen URL</label>
            </div>
            <span class="input-group-addon"></span>
            <!-- video mini -->
            <div id="videomini-input"  class="videomini-input">
                <!-- contenido del input en form-create-product.js -->
            </div>
            <!-- video url -->
            <div id="videourl-input"  class="form-floating">
                <input type="text" name="video" class="form-control" id="videourl" placeholder="video url">
                <label for="videourl">Video URL</label>
            </div>
        </div>

        <div class="input-group">
            <!-- precio -->
            <div id="prec-input" class="form-floating mb-3">
                <input type="number" name="precio" class="form-control" id="precio" placeholder="Precio">
                <label for="precio">Precio</label>
            </div>
            <span class="input-group-addon"></span>
            <!-- presentacion -->
            <div id="cantu-input" class="form-floating mb-3">
                <input type="number" class="form-control" id="cantidadu" placeholder="Cantidad / Unidad">
                <label for="cantidadu">Presentacion</label>
            </div>
            <span class="input-group-addon"></span>
            <span class="input-group-addon"></span>
            <!-- stock -->
            <div id="stock-input" class="form-floating mb-3">
                <input type="number" name="cantidad" class="form-control" id="stock" placeholder="Stock">
                <label for="stock">Stock</label>
            </div>
        </div>

        <!-- descripcion -->
        <div id="desc-input" class="form-floating">
            <textarea class="form-control" name="descripcion" placeholder="Descripción" id="descripcion" style="height: 100px"></textarea>
            <label for="descripcion">Descripción</label>
        </div>

        <!-- go back -->
        <a href="../gestion.html">
            <button id="btn-back" type="button" class="btn btn-outline-danger btn-left btn-back"><i class="fas fa-reply"></i></button>
        </a>
        <!-- eliminar -->
        <button id="btn-delete" type="button" class="btn btn-outline-danger btn-left btn-delete"><i class="bi bi-trash-fill"></i></button>
        <!-- enviar -->
        <button id="btn-send" type="submit" name="agregar_prod" class="btn btn-outline-success btn-right btn-send"><i class="fas fa-paper-plane"></i></button>
        
    </div>
    </form>

    

    <!-- ------------------- FOOTER ------------------- -->
    <div id="footer" class="flex-waves-content content-waves">

        <!--Waves Container-->
        <div class="waves-background">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#000" />
                </g>
            </svg>
        </div>

        <div class="footer-content">
            <h3 class="footer-title">Seguinos en nuestras redes!</h3><br>
            <ul id="social-networks" class="footer-ul">
            </ul>  
        </div>

    </div>

    <!-- Bootstrap Js and Popper -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

    <!-- Mis scripts -->
    <script src="/jquery.js"></script>
    <script src="productos.js"></script>

 

</body>
</html>

<?php } ?>