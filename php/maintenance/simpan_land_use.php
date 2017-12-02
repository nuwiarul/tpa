<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
*/

require '../koneksi.php';

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public");

header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$filename");
header("Content-Type: application/force-download; charset=utf-8");


$fuzzy = $_POST['fuzzy'];
$min = $_POST['min'];
$max = $_POST['max'];
$center = $_POST['center'];
$id = $_POST['id'];

if (empty($id)) {
    $sql = "insert into land_use_fuzzy (fuzzy,min, max, center) values ('$fuzzy','$min','$max','$center')";
} else {
    $sql = "update land_use_fuzzy set fuzzy='$fuzzy',min='$min',max='$max',center='$center' where id='$id'";
}



pg_query($connection, $sql);


$result["success"] = true;
echo json_encode($result);

?>
