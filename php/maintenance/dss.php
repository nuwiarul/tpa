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



$sql = "select g.* from dss g";
$query = pg_query($connection, $sql);

$features = array();

while ($line = pg_fetch_array($query)) {

    

    $point = array();
    $point["id"] = $line[id];
    $point["fuzzy"] = $line[fuzzy];
    $point["geologi"] = $line[geologi];
    $point["geologi_index"] = $line[geologi_index];
    $point["hidrologi"] = $line[hidrologi];
    $point["hidrologi_index"] = $line[hidrologi_index];
    $point["garis_pantai"] = $line[garis_pantai];
    $point["garis_pantai_index"] = $line[garis_pantai_index];
    $point["sungai_besar"] = $line[sungai_besar];
    $point["sungai_besar_index"] = $line[sungai_besar_index];
    $point["land_use"] = $line[land_use];
    $point["land_use_index"] = $line[land_use_index];
    $point["jenis_tanah"] = $line[jenis_tanah];
    $point["jenis_tanah_index"] = $line[jenis_tanah_index];
    $point["rawan_bencana"] = $line[rawan_bencana];
    $point["rawan_bencana_index"] = $line[rawan_bencana_index];
    $point["kemiringan"] = $line[kemiringan];
    $point["kemiringan_index"] = $line[kemiringan_index];

    
        
    $features[] = $point;
}

$result["results"] = $features;
echo json_encode($result);

?>
