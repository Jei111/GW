<?php
//hola
//ALTER TABLE `usuarios` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY
include_once 'db.php';
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_POST = json_decode(file_get_contents('php://input'), true);
    $sent = "insert into productos (codigo, lnk_img, imgprod, video_prod_url, videoprod, nombre, categoria, precio, stock, descripcion) values 
    ('".$_POST['codigo']."', '".$_POST['lnk_img']."', '".$_POST['imgprod']."', '".$_POST['video_prod_url']."', '".$_POST['videoprod']."', '".$_POST['nombre']."', '".$_POST['nomcategoriabre']."', '".$_POST['precio']."', '".$_POST['stock']."', '".$_POST['descripcion']."') ";
    guardar($sent);
         
}elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    if(isset($_GET['id'])){
        $sent = "select * from prod where id = " . $_GET['id'];
        $result = obtener($sent);
        echo json_encode(mysqli_fetch_assoc($result));
    } elseif (!isset($_GET['id'])){
        $sent = "select * from prod";
        $result = obtener($sent);
        
        $json = array();
        while($row = mysqli_fetch_array($result)) {
          $json[] = array(
            'codigo' => $row['codigo'],
            'lnk_img' => $row['lnk_img'],
            'imgprod' => $row['imgprod'],
            'video_prod_url' => $row['video_prod_url'],
            'videoprod' => $row['videoprod'],
            'nombre' => $row['nombre'], 
            'categoria' => $row['categoria'], 
            'precio' => $row['precio'],
            'stock' => $row['stock'], 
            'descripcion' => $row['descripcion']
          );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

}elseif($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $put = json_decode(file_get_contents('php://input'), true);
    $sent = "update productos set codigo = '" .$put['codigo']. "', 
    lnk_img = '" .$put['lnk_img']. "', imgprod = '" .$put['imgprod'].
    "', video_prod_url = '".$put['video_prod_url']. "' where videoprod = " . $_GET['videoprod']. 
    "' where nombre = " . $_GET['nombre']. "' where categoria = " . $_GET['categoria']. 
    "' where precio = " . $_GET['precio']. "' where stock = " . $_GET['stock']. 
    "' where descripcion = " . $_GET['descripcion'];
    guardar($sent);
    
}elseif($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    $sent = "delete from productos where id = " . $_GET['id'];
    guardar($sent);
}

?>
