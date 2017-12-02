/**
 * Created by arul on 3/4/14.
 */
/**
 * Ext.Loader
 */
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        GeoExt: "libs/geoext2/src/GeoExt",
        // for dev use
        Ext: "libs/ext/src",
        Ext: "Chart"
        // for build purpose
//        Ext: "ext-4.2.1.883/src"
    }
});

Ext.require([
    // We need to require this class, even though it is used by Ext.EventObjectImpl
    // see: http://www.sencha.com/forum/showthread.php?262124-Missed-(-)-dependency-reference-to-a-Ext.util.Point-in-Ext.EventObjectImpl
    'Ext.util.Point'
]);

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.AreaRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineSerie');
Ext.require('Chart.ux.Highcharts.BarSerie');
Ext.require('Chart.ux.Highcharts.BoxPlotSerie');
Ext.require('Chart.ux.Highcharts.BubbleSerie');
Ext.require('Chart.ux.Highcharts.ColumnRangeSerie');
Ext.require('Chart.ux.Highcharts.ColumnSerie');
Ext.require('Chart.ux.Highcharts.ErrorBarSerie');
Ext.require('Chart.ux.Highcharts.FunnelSerie');
Ext.require('Chart.ux.Highcharts.GaugeSerie');
Ext.require('Chart.ux.Highcharts.LineSerie');
Ext.require('Chart.ux.Highcharts.PieSerie');
Ext.require('Chart.ux.Highcharts.RangeSerie');
Ext.require('Chart.ux.Highcharts.ScatterSerie');
Ext.require('Chart.ux.Highcharts.SplineSerie');
Ext.require('Chart.ux.Highcharts.WaterfallSerie');


/**
 * CF.app
 * A MVC application demo that uses GeoExt and Ext components to display
 * geospatial data.
 */
Ext.define('TPA.util', {
    singleton: true,
    map: null
});

Ext.application({
    name: 'TPA',
    appFolder: 'app',
    controllers: [
        'geologis',
        'hidrologis',
        'land_uses',
        'jenis_tanahs',
        'rawan_bencanas',
        'kemiringans',
        'administrasis',
        'sungai_besars',
        'garis_pantais',
        'analisis',
        'maintenance.geologis',
        'maintenance.hidrologis',
        'maintenance.garis_pantais',
        'maintenance.sungai_besars',
        'maintenance.land_uses',
        'maintenance.jenis_tanahs',
        'maintenance.rawan_bencanas',
        'maintenance.kemiringans',
        'maintenance.dsss',
        'grafik.geologis',
        'grafik.hidrologis',
        'grafik.garis_pantais',
        'grafik.sungai_besars',
        'grafik.land_uses',
        'grafik.jenis_tanahs',
        'grafik.rawan_bencanas',
        'grafik.kemiringans',
        //'grafik.scatters',
        'setting.ganti_passwords'
    ],

    launch: function () {
        TPA.app = this;
        var map = TPA.app.globals.map;

        var controls = [new OpenLayers.Control.ScaleLine(), new OpenLayers.Control.MousePosition()];
        map.addControls(controls)


        map.addControl(new OpenLayers.Control.LayerSwitcher());

        var paramHashBase = {};
        paramHashBase['map'] = '/ms4w/apps/tpa/basemap.map';
        paramHashBase['layers'] = 'gmap';
        paramHashBase['format'] = 'image/jpeg';

        var layer = new OpenLayers.Layer.WMS("Basemap",
            "http://localhost/cgi-bin/mapserv.exe", paramHashBase);

        
		/*
        var gsat = new OpenLayers.Layer.Google(
            "Google Satellite",
            {type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
        );
        var gphy = new OpenLayers.Layer.Google(
            "Google Physical",
            {type: google.maps.MapTypeId.TERRAIN, visibility: false}
        );
        var gmap = new OpenLayers.Layer.Google(
            "Google Streets", // the default
            {numZoomLevels: 20, visibility: false}
        );
        var ghyb = new OpenLayers.Layer.Google(
            "Google Hybrid",
            {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 22, visibility: false}
        );






        map.addLayer(gmap);
        map.addLayer(gsat);

        map.setCenter(new OpenLayers.LonLat(115.095, -8.376).transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        ), 10);

        */


        map.addLayer(layer);

        map.setCenter(new OpenLayers.LonLat(115.095, -8.376), 10);


        //TPA.util.map = map;
        var center = Ext.create('TPA.view.border.map');
        var west = Ext.create('TPA.view.border.west', {
            mapPanel: center
        });

        var north = Ext.create('TPA.view.border.north', {
            legend: west
        });


        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'border',
                padding: 5

            },
            defaults: {
                split: true
            },
            items: [north, west, center]
        });
    },
    globals: {
        map: new OpenLayers.Map({
            //allOverlays: true,
            //units: 'dd',
            //numZoomLevels: 20

        }),
        legend: null,
        infoState: false,
        infoControl: null
    }

});