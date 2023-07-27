<?php
include("db.php");

if(isset($_GET['id'])) {
    $id = $_GET['id'];

    if(isset($_POST['agregar_prod'])){
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $cantidad = $_POST['cantidad'];
        $precio = $_POST['precio'];

        if(isset($_FILES['img_prod']) && $_FILES['img_prod']['error'] === UPLOAD_ERR_OK){
           //editar producto con imagen
            echo "hay archivo<br>";
            //primero borramos imagen anterior
            $sent = "select lnk_img from prod where id=$id";
            $res = mysqli_fetch_assoc(obtener($sent));
            $nombre_imagen_anterior = $res['lnk_img'];
            $ruta_anterior = "../gestion/create-product/imgs/" . $nombre_imagen_anterior;
            unlink($ruta_anterior);
            
            //recuperamos nueva imagen subida por el usuario
            $nombre_img = basename($_FILES['img_prod']['name']);
            $ruta = "../gestion/create-product/imgs/" . $nombre_img;
            echo "<br>ruta: " . $ruta;
            $subirarchivo = move_uploaded_file($_FILES['img_prod']['tmp_name'], $ruta);
            if($subirarchivo){
                echo "<br> archivo subido";
                $query = "update prod set nombre = '$nombre', lnk_img = '$nombre_img', 
                descripcion = '$descripcion', precio = $precio , cantidad = $cantidad
                where id = $id";
                echo "<br>" . $query;
                $result = guardar($query);
                if($result){
                    header("Location: ../gestion/gestion.html" );
                } else {
                    echo "ubo un error: ";
                }
            }else{
                echo "<br> error al subir archivo";
            }
        }else{
            //editar producto sin imagen
            echo "No file";
            $query = "update prod set nombre = '$nombre', descripcion = '$descripcion', 
            precio = $precio , cantidad = $cantidad where id = $id";
            echo "<br>" . $query;
            $result = guardar($query);
            if($result){
                header("Location: ../gestion/gestion.html" );
            } else {
                echo "ubo un error: ";
            }

        }
    }


}


?>