<?php session_start() ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>TPA</title>

    <link rel="stylesheet" type="text/css" href="libs/ext/resources/css/ext-all.css">
    <link rel="stylesheet" type="text/css" href="libs/openlayers/theme/default/style.css"/>
    <!-- <link rel="stylesheet" type="text/css" href="libs/ol/ol.css"/> -->
    <link rel="stylesheet" type="text/css" href="css/default.css"/>
    <!-- <script type="text/javascript" src='http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAgUw9n2152lkZxbXuMUqGIRQbx4fH2FgSPcFL5JmtrCDjwk-gkBTd599nkvy5-i5U-8JaapkOGY9LUw'></script> -->
    <script src="http://maps.google.com/maps/api/js?v=3&amp;sensor=false"></script>
    <script src="libs/openlayers/OpenLayers.js"></script>
    <!-- <script src="libs/ol/ol.js"></script> -->
    <script type="text/javascript" charset="utf-8" src="libs/ext/ext-all-debug.js"></script>
    <script src="libs/jquery/jquery-1.11.0.min.js"></script>
    <script src="libs/highchart/highcharts.js"></script>
    <script src="libs/highchart/highcharts-more.js"></script>
    <script src="libs/highchart/exporting.js"></script>

</head>
<body>
<?php if (isset($_SESSION['user_login']) && !empty($_SESSION['user_login'])) : ?>
    <script type="text/javascript" src="app.js"></script>
<?php else : ?>
    <script type="text/javascript" src="login.js"></script>
<?php endif; ?>

</body>
</html>

