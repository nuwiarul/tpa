<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
*/

require '../koneksi.php';

/*
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public");

header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$filename");
header("Content-Type: application/force-download; charset=utf-8");
*/

/*

$sql = "select g.* from geologi_fuzzy g";
$query = pg_query($connection, $sql);

$features = array();

while ($line = pg_fetch_array($query)) {

    

    $point = array();
    $point["id"] = $line[id];
    $point["fuzzy"] = $line[fuzzy];
    $point["min"] = $line[min];
    $point["max"] = $line[max];
    $point["center"] = $line[center];
    
        
    $features[] = $point;
}

$arr = array();


$result["results"] = $features;
echo json_encode($result);
*/

/*
$arr = array(8,7,1,6,9,3,2,5);


sort($arr);


for ($i = 0; $i < sizeof($arr);$i++) {
    echo $arr[$i];
}
*/

$nilai = $_GET['nilai'];
$nilai_fuzzy = $_GET['nilai_fuzzy'];

$sql = "select g.* from geologi_fuzzy g ORDER BY g.min ASC";
$query = pg_query($connection, $sql);

$features = array();


while ($line = pg_fetch_array($query)) {



    $point = array();
    $point["id"] = $line[id];
    $point["fuzzy"] = $line[fuzzy];
    $point["min"] = $line[min];
    $point["max"] = $line[max];
    $point["center"] = $line[center];


    $features[] = $point;

}



$result["results"] = $features;
echo json_encode($result);



?>
