<?php
session_start();

function guardar($sent){
    $link = mysqli_connect("localhost", "usr1", "pass1", "tienda_passe");
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    if ($res = mysqli_query($link, $sent)) {
        mysqli_close($link);
        return $res;
    }else {
        printf("Errormessage: %s\n", mysqli_error($link));
        echo mysql_errno($link) . ": " . mysql_error($link) . "\n";
        mysqli_close($link);
    }
    
}

function obtener($sent){
    $link = mysqli_connect("localhost", "usr1", "pass1", "tienda_passe");
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    if (!$result = mysqli_query($link, $sent)) {
        printf("Errormessage: %s\n", mysqli_error($link));
        echo mysql_errno($link) . ": " . mysql_error($link) . "\n";
        mysqli_close($link);
    } else {
        mysqli_close($link);
        return $result;
    }
}


?>