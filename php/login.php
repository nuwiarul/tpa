<?php

session_start();
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require 'koneksi.php';

$loginUsername = isset($_POST["username"]) ? $_POST["username"] : "";
$loginPassword = isset($_POST["password"]) ? $_POST["password"] : "";
$loginPassword = md5($loginPassword);

$sql = "select * from users where user_login='$loginUsername' and pass_login='$loginPassword'";

$result = pg_query($connection, $sql);

$nbrows = pg_num_rows($result);

if ($nbrows > 0) {
    $row = pg_fetch_array($result);
    session_register("user_login");

    $_SESSION['user_login'] = $row['user_login'];

    echo "{success: true,msg:'Welcome.....'}";
    
} else {
    echo "{success: false,errors:{msg:'Username Atau Password Salah'}}";
}



?>
