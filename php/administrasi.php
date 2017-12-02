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



$sql = "select st_asgeojson(g.the_geom) as geom,g.* from administrasi g";
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
    $point["properties"]["kecamatan"] = $line[kecamatan];
    $point["properties"]["desa"] = $line[desa];

        
    $features[] = $point;
}

$result["features"] = $features;
echo json_encode($result);

?>
