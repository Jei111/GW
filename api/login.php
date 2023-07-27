<?php
include_once 'db.php';


$usr = $_POST['nom_usr'];
$pass = $_POST['pass'];

$sent = "select usr, pass, admin from usrs where usr = '$usr' and pass = '$pass'";

$res =  obtener($sent);
$match  = mysqli_num_rows($res);
if($match > 0){
    echo 'te has logeado correctamente';
    $row = mysqli_fetch_assoc($res);
    $_SESSION['usr'] = $row['usr'];
    $_SESSION['admin'] = $row['admin'];
    header("Location:../index.html");
    // Set cookie / Start Session / Start Download etc...
}else{
    echo 'Login Failed! Asegurate de introducir los datos correctos y que tu cuenta se encuentre ACTIVA';
}

?>