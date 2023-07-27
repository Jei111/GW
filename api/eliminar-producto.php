<?php
include_once 'db.php';

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sent = "select lnk_img from prod where id=$id";
    $res = mysqli_fetch_assoc(obtener($sent));
    $nombre_img = $res['lnk_img'];
    $ruta = "../gestion/create-product/imgs/" . $nombre_img;
    unlink($ruta);

    $sent = "delete from prod where id=$id";
    if(guardar($sent)){
        echo "borrado id: " . $id;
        header("Location: ../gestion/gestion.html");
    }




}


?>