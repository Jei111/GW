<?php
session_start();
header("Content-Type: application/json");

if(isset($_SESSION['usr'])){
    $json[] = array(
        'usr' => $_SESSION['usr'],
        'admin' => $_SESSION['admin']
    );
    $jsonstring = json_encode($json);
    echo $jsonstring;
}elseif(!isset($_SESSION['usr'])){
    $json[] = array(
        'usr' => 'invitado',
        'admin' => 'f'
    );
    $jsonstring = json_encode($json);
    echo $jsonstring;
}


?>