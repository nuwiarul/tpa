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
$geologi_index = $_POST['geologi_index'];
$hidrologi_index = $_POST['hidrologi_index'];
$garis_pantai_index = $_POST['garis_pantai_index'];
$sungai_besar_index = $_POST['sungai_besar_index'];
$jenis_tanah_index = $_POST['jenis_tanah_index'];
$land_use_index = $_POST['land_use_index'];
$rawan_bencana_index = $_POST['rawan_bencana_index'];
$kemiringan_index = $_POST['kemiringan_index'];
$id = $_POST['id'];

$sql = "select * from geologi_fuzzy where id='$geologi_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$geologi = $line['fuzzy'];

$sql = "select * from hidrologi_fuzzy where id='$hidrologi_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$hidrologi = $line['fuzzy'];

$sql = "select * from garis_pantai_fuzzy where id='$garis_pantai_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$garis_pantai = $line['fuzzy'];

$sql = "select * from sungai_besar_fuzzy where id='$sungai_besar_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$sungai_besar = $line['fuzzy'];

$sql = "select * from land_use_fuzzy where id='$land_use_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$land_use = $line['fuzzy'];

$sql = "select * from jenis_tanah_fuzzy where id='$jenis_tanah_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$jenis_tanah = $line['fuzzy'];

$sql = "select * from rawan_bencana_fuzzy where id='$rawan_bencana_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$rawan_bencana = $line['fuzzy'];


$sql = "select * from kemiringan_fuzzy where id='$kemiringan_index'";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$kemiringan = $line['fuzzy'];

/*

*/

if (empty($id)) {
    $sql = "select * from dss where geologi_index='$geologi_index' and hidrologi_index='$hidrologi_index' and
         garis_pantai_index='$garis_pantai_index' and sungai_besar_index='$sungai_besar_index' and
         land_use_index='$land_use_index' and jenis_tanah_index='$jenis_tanah_index' and
         rawan_bencana_index='$rawan_bencana_index' and kemiringan_index='$kemiringan_index'";
    $query = pg_query($connection, $sql);
    $rows = pg_num_rows($query);

    if ($rows > 0) {
        $result["success"] = false;
    } else {
        $sql = "insert into dss (fuzzy,geologi,geologi_index, hidrologi,hidrologi_index,
            garis_pantai,garis_pantai_index,sungai_besar,sungai_besar_index,
            land_use,land_use_index,jenis_tanah,jenis_tanah_index,
            rawan_bencana,rawan_bencana_index,kemiringan,kemiringan_index)
            values ('$fuzzy','$geologi','$geologi_index','$hidrologi','$hidrologi_index',
            '$garis_pantai','$garis_pantai_index','$sungai_besar','$sungai_besar_index',
            '$land_use','$land_use_index','$jenis_tanah','$jenis_tanah_index',
            '$rawan_bencana','$rawan_bencana_index','$kemiringan','$kemiringan_index')";
        pg_query($connection, $sql);
        $result["success"] = true;
    }



} else {
    $sql = "update dss set fuzzy='$fuzzy',geologi='$geologi',geologi_index='$geologi_index',
            hidrologi='$hidrologi',hidrologi_index='$hidrologi_index',
            garis_pantai='$garis_pantai',garis_pantai_index='$garis_pantai_index',
            sungai_besar='$sungai_besar',sungai_besar_index='$sungai_besar_index',
            land_use='$land_use',land_use_index='$land_use_index',
            jenis_tanah='$jenis_tanah',jenis_tanah_index='$jenis_tanah_index',
            rawan_bencana='$rawan_bencana',rawan_bencana_index='$rawan_bencana_index',
            kemiringan='$kemiringan',kemiringan_index='$kemiringan_index'
             where id='$id'";
    pg_query($connection, $sql);
    $result["success"] = true;
}







echo json_encode($result);

?>
