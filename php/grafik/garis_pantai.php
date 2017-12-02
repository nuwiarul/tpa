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

$sql = "select g.* from garis_pantai_fuzzy g ORDER BY g.min ASC";
$query = pg_query($connection, $sql);

$features = array();

$arr = array();

while ($line = pg_fetch_array($query)) {


    array_push($arr, $line[min]);
    array_push($arr, $line[max]);
    array_push($arr, $line[center]);

    $point = array();
    $point["id"] = $line[id];
    $point["fuzzy"] = $line[fuzzy];
    $point["min"] = $line[min];
    $point["max"] = $line[max];
    $point["center"] = $line[center];


    $features[] = $point;

}

//array_push($arr, $nilai);


sort($arr);

$name = array();

for ($i = 0; $i < sizeof($arr); $i++) {
    //echo $arr[$i] . "<br/>";
    if (!cek($name, $arr[$i])) {
        array_push($name, $arr[$i]);
    }
}


$data = array();

for ($i = 0; $i < sizeof($name); $i++) {

    $point = array();
    $point['name'] = $name[$i];

    for ($j = 0 ; $j < sizeof($features); $j++) {



        if (cekarr($features[$j], $name[$i])) {

            $point['data' . $j] = 1;
        } else {
            $point['data' . $j] = 0;
        }

    }

    /*

    if ($nilai == $name[$i]) {
        $point['hasil'] = $nilai_fuzzy;
    } else {
        $point['hasil'] = 0;
    }

    */

    $data[] = $point;
}

$result["results"] = $data;
echo json_encode($result);

/*
for ($m = 0; $m < sizeof($data);$m++) {
    echo $data[$m]['name'] . " : " . $data[$m]['data2'] . "<br/>";
}

*/



function cek($arr , $value) {
    for ($j = 0 ; $j < sizeof($arr); $j++) {
        if ($arr[$j] == $value) {
            return true;
        }
    }

    return false;
}

function cekarr($arr , $value) {
    if ($arr['min'] == $value) {
        return true;
    } else if ($arr['center'] == $value) {
        return true;
    }

    return false;
}

?>
