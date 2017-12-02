<?php

require 'koneksi.php';
require 'inf.php';





$geologi = 20;
$hidrologi = 20;
$garis_pantai = 1.57;
$sungai = 2.31;
$land_use = 30;
$jenis_tanah = 20;
$rawan_bencana = 10;
$kemiringan = 60;

$inf = new Inferensi();

$inf->setConnection($connection);
$inf->setGeologi($geologi);
$inf->setHidrologi($hidrologi);
$inf->setGarisPantai($garis_pantai);
$inf->setSungaiBesar($sungai);
$inf->setLandUse($land_use);
$inf->setJenisTanah($jenis_tanah);
$inf->setRawanBencana($rawan_bencana);
$inf->setKemiringan($kemiringan);

$hasil_akhir = $inf->getHasilAkhir();

echo "Hasil Akhir : <br><br>";
echo "Nilai Maksimal DSS = " . $hasil_akhir['udss'] . "<br>";
echo "DSS = " . $hasil_akhir['dss'] . "<br>";

