<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$host = "crunchy-postgres-gis-tpa.a3c1.starter-us-west-1.openshiftapps.com";
$user = "postgis";
$pass = "postgis";
$dbname = "tpa";

$connectstring = "host=$host dbname=$dbname user=$user password=$pass";
$connection = pg_connect($connectstring);


if (!$connection) {
    die ("Tidak Bisa Konek ke Database Postgis");
}

?>
