<?php
session_start();

require '../koneksi.php';

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public");

header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$filename");
header("Content-Type: application/force-download; charset=utf-8");


$old_password = $_POST['old_password'];
$new_password = $_POST['new_password'];
$old_password = md5($old_password);
$new_password = md5($new_password);
$username = $_SESSION['user_login'];

$sql = "select * from users where user_login='$username' and pass_login='$old_password'";

$result = pg_query($connection, $sql);

$nbrows = pg_num_rows($result);

if ($nbrows > 0) {

    $sql = "update users set pass_login='$new_password' where user_login='$username'";
    pg_query($connection, $sql);

    $rst["success"] = true;
} else {
    $rst["success"] = false;
}

echo json_encode($rst);

?>
