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


$id = $_POST['id'];


$sql = "delete from hidrologi_fuzzy where id='$id'";


pg_query($connection, $sql);


$result["success"] = true;
echo json_encode($result);

?>
