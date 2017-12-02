<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
*/

require 'koneksi.php';

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public");

header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$filename");
header("Content-Type: application/force-download; charset=utf-8");



$sql = "select st_asgeojson(g.the_geom) as geom,g.* from land_use g";
$query = pg_query($connection, $sql);

$result = array();
$result["type"] = "FeatureCollection";

$features = array();

while ($line = pg_fetch_array($query)) {

    

    $point = array();
    $point["type"] = "Feature";
    $point["geometry"] = array();
    $point["geometry"] = json_decode($line[geom]);
    $point["properties"] = array();
    $point["properties"]["gid"] = $line[gid];
    $point["properties"]["sub_sws"] = $line[sub_sws];
    $point["properties"]["keterangan"] = $line[keterangan];
    $point["properties"]["kandungan"] = $line[kandungan];
    $point["properties"]["data"] = $line[data];
    $point["properties"]["nilai"] = $line[nilai];

        
    $features[] = $point;
}

$result["features"] = $features;
echo json_encode($result);

?>
