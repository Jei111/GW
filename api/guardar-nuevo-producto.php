<?php
include_once 'db.php';

if (isset($_POST['agregar_prod'])) {

    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];
  
    if ($_FILES["archivo"]){
        echo "hay archivo";
      $nombre_img = basename($_FILES['archivo']['name']);

      $ruta = "../gestion/create-product/imgs/" . $nombre_img;
      echo "<br>ruta: " . $ruta;
      $subirarchivo = move_uploaded_file($_FILES['archivo']['tmp_name'], $ruta);
      if($subirarchivo){
          echo "<br> archivo subido";
        $query = "INSERT INTO prod(nombre, lnk_img, descripcion, precio, cantidad) 
        VALUES ( '$nombre', '$nombre_img', '$descripcion', '$precio', '$cantidad')";
        echo "<br>" . $query;
        $result = guardar($query);
        if($result){
         header("Location: ../gestion/gestion.html" );
        } else {
            echo "ubo un error";
       }
      }else{
          echo "<br> error al subir archivo";
      }
    }
}





?>