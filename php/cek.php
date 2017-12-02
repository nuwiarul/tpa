<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
*/

require 'koneksi.php';

$nilai = 10;

$sql = "select * from geologi_fuzzy where '$nilai' > min and '$nilai' < max";
$query = pg_query($connection, $sql);
$line = pg_fetch_array($query);

echo $line['fuzzy'];
echo $line['min'];
echo $line['max'];
echo $line['center'];




?>
