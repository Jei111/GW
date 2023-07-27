<?php
// DARIO armé todo este archivo... hay uqe revisar que todo esté bien
include_once 'db.php';
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_POST = json_decode(file_get_contents('php://input'), true);
    $sent = "insert into mensjaes (remitente, asunto, fecha, mensaje) values 
    ('".$_POST['remitente']."', '".$_POST['asunto']."', '".$_POST['fecha']."', '".$_POST['mensaje']."') ";
    guardar($sent);
         
}elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    if(isset($_GET['id'])){
        $sent = "select * from prod where id = " . $_GET['id'];
        $result = obtener($sent);
        echo json_encode(mysqli_fetch_assoc($result));
    } elseif (!isset($_GET['id'])){
        $sent = "select * from prod"; // DARIO prod no es, pero no sé cual es
        $result = obtener($sent);
        
        $json = array();
        while($row = mysqli_fetch_array($result)) {
          $json[] = array(
            'remitente' => $row['remitente'],
            'asunto' => $row['asunto'],
            'fecha' => $row['fecha'],
            'mensaje' => $row['mensaje']
          );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

}elseif($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $put = json_decode(file_get_contents('php://input'), true);
    $sent = "update mensajes set remitente = '" .$put['remitente']. "', 
    asunto = '" .$put['asunto']. "', fecha = '" .$put['fecha'].
    "', mensaje = '".$put['mensaje']. "' where id = " . $_GET['id'];
    guardar($sent);
    
}elseif($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    $sent = "delete from mensajes where id = " . $_GET['id'];
    guardar($sent);
}

?>
