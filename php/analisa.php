<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
*/

error_reporting(0);
require 'koneksi.php';
require 'inf.php';

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public");

header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$filename");
header("Content-Type: application/force-download; charset=utf-8");

$result = array();
$features = array();

$x = $_POST['x'];
$y = $_POST['y'];

$sql = "select * from geologi where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
if ($line) {
    $geologi_cek = true;
}
$nilai = $line['nilai'];


$point = array();
$point["nilai"] = $nilai;
$result["geologi"] = $point;


$sql = "select * from hidrologi where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
if ($line) {
    $hidrologi_cek = true;
}

$nilai = $line['nilai'];

$point = array();
$point["nilai"] = $nilai;
$result["hidrologi"] = $point;

$sql = "select (st_distance(ST_GeomFromText('POINT($x $y)', -1), the_geom) * 100) as jarak from garis_pantai";
$query = pg_query($connection, $sql);
$nilai = 10000;
while ($line = pg_fetch_array($query)) {

    if ($line['jarak'] < $nilai) {
        $nilai = $line['jarak'];
    }

}

$point = array();
$point["nilai"] = number_format($nilai, 2);
$result["garis_pantai"] = $point;


$sql = "select (st_distance(ST_GeomFromText('POINT($x $y)', -1), st_exteriorring(the_geom)) * 100) as jarak from sungai_besar";
$query = pg_query($connection, $sql);
$nilai = 10000;
while ($line = pg_fetch_array($query)) {

    if ($line['jarak'] < $nilai) {
        $nilai = $line['jarak'];
    }

}



$point = array();
$point["nilai"] = number_format($nilai, 2);
$result["sungai_besar"] = $point;



$sql = "select * from land_use where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
if ($line) {
    $land_use_cek = true;
}
$nilai = $line['nilai'];

$point = array();
$point["nilai"] = $nilai;

$result["land_use"] = $point;


$sql = "select * from jenis_tanah where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
if ($line) {
    $jenis_tanah_cek = true;
}

$nilai = $line['nilai'];

$point = array();
$point["nilai"] = $nilai;
$result["jenis_tanah"] = $point;

$sql = "select * from rawan_bencana where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);

if ($line) {
    $rawan_bencana_cek = true;
}
$nilai = $line['nilai'];


$point = array();
$point["nilai"] = $nilai;

$result["rawan_bencana"] = $point;

$sql = "select * from kemiringan where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
if ($line) {
    $kemiringan_cek = true;
}
$nilai = $line['nilai'];


$point = array();
$point["nilai"] = $nilai;
$result["kemiringan"] = $point;



$sql = "select * from administrasi where st_contains(the_geom, ST_GeomFromText('POINT($x $y)', -1))";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);
$desa = $line['desa'];
$kecamatan = $line['kecamatan'];



$result["desa"] = $desa;
$result["kecamatan"] = $kecamatan;

$inf = new Inferensi();

$inf->setConnection($connection);
$inf->setGeologi($result["geologi"]['nilai']);
$inf->setHidrologi($result["hidrologi"]['nilai']);
$inf->setGarisPantai($result["garis_pantai"]['nilai']);
$inf->setSungaiBesar($result["sungai_besar"]['nilai']);
$inf->setLandUse($result["land_use"]['nilai']);
$inf->setJenisTanah($result["jenis_tanah"]['nilai']);
$inf->setRawanBencana($result["rawan_bencana"]['nilai']);
$inf->setKemiringan($result["kemiringan"]['nilai']);

$hasil_akhir = $inf->getHasilAkhir();

$result['udss'] = $hasil_akhir['udss'];
$result['dss'] = $hasil_akhir['dss'];
$result['inferensi'] = $inf->getResultArray();

if ($geologi_cek && $hidrologi_cek && $land_use_cek &&
    $jenis_tanah_cek &&  $rawan_bencana_cek &&
    $kemiringan_cek ) {
    $result["success"] = true;
    echo json_encode($result);
} else {
    $rst["success"] = false;
    echo json_encode($rst);
}



?>
