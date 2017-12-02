<?php

require 'koneksi.php';

$geologi = 20;
$hidrologi = 20;
$garis_pantai = 1.57;
$sungai = 2.31;
$land_use = 30;
$jenis_tanah = 20;
$rawan_bencana = 10;
$kemiringan = 60;

$sql = "select g.* from geologi_fuzzy g ORDER BY g.min ASC";
$query = pg_query($connection, $sql);

$geologi_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($geologi > $line['min'] && $geologi < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $geologi) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $geologi_arr[] = $point;
    }


}



$sql = "select h.* from hidrologi_fuzzy h ORDER BY h.min ASC";
$query = pg_query($connection, $sql);

$hidrologi_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($hidrologi > $line['min'] && $hidrologi < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $hidrologi) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $hidrologi_arr[] = $point;
    }
}

$sql = "select g.* from garis_pantai_fuzzy g ORDER BY g.min ASC";
$query = pg_query($connection, $sql);

$garis_pantai_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($garis_pantai > $line['min'] && $garis_pantai < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $garis_pantai) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $garis_pantai_arr[] = $point;
    }
}

$sql = "select s.* from sungai_besar_fuzzy s ORDER BY s.min ASC";
$query = pg_query($connection, $sql);

$sungai_besar_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($sungai > $line['min'] && $sungai < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $sungai) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $sungai_besar_arr[] = $point;
    }
}

$sql = "select l.* from land_use_fuzzy l ORDER BY l.min ASC";
$query = pg_query($connection, $sql);

$land_use_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($land_use > $line['min'] && $land_use < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $land_use) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $land_use_arr[] = $point;
    }
}

$sql = "select j.* from jenis_tanah_fuzzy j ORDER BY j.min ASC";
$query = pg_query($connection, $sql);

$jenis_tanah_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($jenis_tanah > $line['min'] && $jenis_tanah < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $jenis_tanah) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $jenis_tanah_arr[] = $point;
    }
}

$sql = "select r.* from rawan_bencana_fuzzy r ORDER BY r.min ASC";
$query = pg_query($connection, $sql);

$rawan_bencana_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($rawan_bencana > $line['min'] && $rawan_bencana < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $rawan_bencana) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $rawan_bencana_arr[] = $point;
    }
}

$sql = "select k.* from kemiringan_fuzzy k ORDER BY k.min ASC";
$query = pg_query($connection, $sql);

$kemiringan_arr = array();


while ($line = pg_fetch_array($query)) {

    if ($kemiringan > $line['min'] && $kemiringan < $line['max']) {
        $point = array();
        $point["id"] = $line[id];
        $point["fuzzy"] = $line[fuzzy];
        $point["min"] = $line[min];
        $point["max"] = $line[max];
        $point["center"] = $line[center];
        $nilai = ($line[max] - $kemiringan) / ($line[max] - $line[min]);
        $point["nilai"] = $nilai;
        $kemiringan_arr[] = $point;
    }
}

/*
echo "Geologi : <br>";
var_dump($geologi_arr);
echo "<br>";
echo "Hidrologi : <br>";
var_dump($hidrologi_arr);
echo "<br>";
echo "Garis pantai : <br>";
var_dump($garis_pantai_arr);
echo "<br>";
echo "Sungai : <br>";
var_dump($sungai_besar_arr);
echo "<br>";
echo "Land use : <br>";
var_dump($land_use_arr);
echo "<br>";
echo "Jenis tanah : <br>";
var_dump($jenis_tanah_arr);
echo "<br>";
echo "Rawan bencana : <br>";
var_dump($rawan_bencana_arr);
echo "<br>";
echo "Kemiringan : <br>";
var_dump($kemiringan_arr);
echo "<br>";
*/

$arr = array();

for ($a = 0;$a < sizeof($geologi_arr);$a++) {
    for ($b = 0; $b < sizeof($hidrologi_arr);$b++) {
        for ($c = 0 ; $c < sizeof($garis_pantai_arr); $c++) {
            for ($d = 0 ; $d < sizeof($sungai_besar_arr);$d++) {
                for ($e = 0 ; $e < sizeof($land_use_arr); $e++) {
                    for ($f=0 ; $f < sizeof($jenis_tanah_arr);$f++) {
                        for ($g = 0 ; $g < sizeof($rawan_bencana_arr); $g++) {
                            for ($h = 0 ; $h < sizeof($kemiringan_arr); $h++) {

                                $point = array();
                                $point['geologi'] = $geologi_arr[$a]['id'];
                                $point['hidrologi'] = $hidrologi_arr[$b]['id'];
                                $point['garis_pantai'] = $garis_pantai_arr[$c]['id'];
                                $point['sungai_besar'] = $sungai_besar_arr[$d]['id'];
                                $point['land_use'] = $land_use_arr[$e]['id'];
                                $point['jenis_tanah'] = $jenis_tanah_arr[$f]['id'];
                                $point['rawan_bencana'] = $rawan_bencana_arr[$g]['id'];
                                $point['kemiringan'] = $kemiringan_arr[$h]['id'];

                                if (cek_array($arr, $point)) {
                                    $point['geologi_fz'] = $geologi_arr[$a]['fuzzy'];
                                    $point['hidrologi_fz'] = $hidrologi_arr[$b]['fuzzy'];
                                    $point['garis_pantai_fz'] = $garis_pantai_arr[$c]['fuzzy'];
                                    $point['sungai_besar_fz'] = $sungai_besar_arr[$d]['fuzzy'];
                                    $point['land_use_fz'] = $land_use_arr[$e]['fuzzy'];
                                    $point['jenis_tanah_fz'] = $jenis_tanah_arr[$f]['fuzzy'];
                                    $point['rawan_bencana_fz'] = $rawan_bencana_arr[$g]['fuzzy'];
                                    $point['kemiringan_fz'] = $kemiringan_arr[$h]['fuzzy'];

                                    $point['geologi_nilai'] = $geologi_arr[$a]['nilai'];
                                    $point['hidrologi_nilai'] = $hidrologi_arr[$b]['nilai'];
                                    $point['garis_pantai_nilai'] = $garis_pantai_arr[$c]['nilai'];
                                    $point['sungai_besar_nilai'] = $sungai_besar_arr[$d]['nilai'];
                                    $point['land_use_nilai'] = $land_use_arr[$e]['nilai'];
                                    $point['jenis_tanah_nilai'] = $jenis_tanah_arr[$f]['nilai'];
                                    $point['rawan_bencana_nilai'] = $rawan_bencana_arr[$g]['nilai'];
                                    $point['kemiringan_nilai'] = $kemiringan_arr[$h]['nilai'];
                                    $udss = array($point['geologi_nilai'],$point['hidrologi_nilai'],$point['garis_pantai_nilai'],
                                        $point['sungai_besar_nilai'],$point['land_use_nilai'],$point['jenis_tanah_nilai'],$point['rawan_bencana_nilai'],
                                        $point['kemiringan_nilai']);
                                    $point['udss'] = min($udss);

                                    $geologi_index = $point['geologi'];
                                    $hidrologi_index = $point['hidrologi'];
                                    $garis_pantai_index = $point['garis_pantai'];
                                    $sungai_besar_index = $point['sungai_besar'];
                                    $jenis_tanah_index = $point['jenis_tanah'];
                                    $land_use_index = $point['land_use'];
                                    $rawan_bencana_index = $point['rawan_bencana'];
                                    $kemiringan_index = $point['kemiringan'];

                                    $sql = "select * from dss where geologi_index='$geologi_index' and hidrologi_index='$hidrologi_index' and
                                            garis_pantai_index='$garis_pantai_index' and sungai_besar_index='$sungai_besar_index' and
                                            land_use_index='$land_use_index' and jenis_tanah_index='$jenis_tanah_index' and
                                            rawan_bencana_index='$rawan_bencana_index' and kemiringan_index='$kemiringan_index'";
                                    $query = pg_query($connection, $sql);

                                    $rows = pg_num_rows($query);

                                    if ($rows > 0) {
                                        $line = pg_fetch_array($query);
                                        $point['dss'] = $line['fuzzy'];
                                    } else {
                                        $point['dss'] = "Belum Ada Data";
                                    }

                                    $arr[] = $point;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
}


$hasil = array();

for ($i = 0; $i < sizeof($arr);$i++) {
    echo "Kombinasi rule " . ($i + 1) . "<br>";
    echo "Geologi : " . $arr[$i]['geologi_fz'] . "(". $geologi .")" . "= " . $arr[$i]['geologi_nilai'] . "<br>";
    echo "Hidrologi : " . $arr[$i]['hidrologi_fz'] . "(". $hidrologi .")" . "= " . $arr[$i]['hidrologi_nilai'] . "<br>";
    echo "Garis Pantai : " . $arr[$i]['garis_pantai_fz'] . "(". $garis_pantai .")" . "= " . $arr[$i]['garis_pantai_nilai'] . "<br>";
    echo "Sungai Besar : " . $arr[$i]['sungai_besar_fz'] . "(". $sungai .")" . "= " . $arr[$i]['sungai_besar_nilai']  . "<br>";
    echo "Land Use : " . $arr[$i]['land_use_fz'] . "(". $land_use .")" . "= " . $arr[$i]['land_use_nilai'] . "<br>";
    echo "Jenis Tanah : " . $arr[$i]['jenis_tanah_fz'] . "(". $jenis_tanah .")" . "= " . $arr[$i]['jenis_tanah_nilai'] . "<br>";
    echo "Rawan Bencana : " . $arr[$i]['rawan_bencana_fz'] . "(". $rawan_bencana .")" . "= " . $arr[$i]['rawan_bencana_nilai'] . "<br>";
    echo "Kemiringan : " . $arr[$i]['kemiringan_fz'] . "(". $kemiringan .")". "= " . $arr[$i]['kemiringan_nilai'] . "<br>";
    echo "Nilai Minimal DSS = " . $arr[$i]['udss'] . "<br>";
    echo "DSS = " . $arr[$i]['dss'] . "<br>";
    echo "Akhir<br><br><br>";
    $po = array();
    $po['udss'] = $arr[$i]['udss'];
    $po['dss'] = $arr[$i]['dss'];

    $hasil[] = $po;
}

$hasil_akhir = max($hasil);

echo "Hasil Akhir : <br><br>";
echo "Nilai Maksimal DSS = " . $hasil_akhir['udss'] . "<br>";
echo "DSS = " . $hasil_akhir['dss'] . "<br>";

function cek_array($arr, $value) {

    for ($i=0; $i < sizeof($arr);$i++) {

        if ($arr[$i]['geologi'] == $value['geologi'] && $arr[$i]['hidrologi'] == $value['hidrologi'] &&
            $arr[$i]['garis_pantai'] == $value['garis_pantai'] && $arr[$i]['sungai_besar'] == $value['sungai_besar'] &&
            $arr[$i]['land_use'] == $value['land_use'] && $arr[$i]['jenis_tanah'] == $value['jenis_tanah'] &&
            $arr[$i]['rawan_bencana'] == $value['rawan_bencana'] && $arr[$i]['kemiringan'] == $value['kemiringan']) {
            return false;
        }

    }

    return true;
}




