/**
 * Created by arul on 3/4/14.
 */
Ext.define('TPA.view.border.toolbar', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.Window', // useless in fact, since we're using ext-all.js in the example
        'GeoExt.window.Popup'
    ],
    legend: null,
    infoState: false,
    infoControl: null,
    infoEvent: false,
    recordLayer: null,
    popup: null,
    initComponent: function () {

        //console.log(this.legend)

        var ctrl, toolbarItems = [], action, actions = {};

        var map = TPA.app.globals.map;

        action = Ext.create('GeoExt.Action', {
            //control: new OpenLayers.Control.ZoomToMaxExtent(),
            map: map,
            tooltip: "zoom to max extent",
            iconCls: 'zoomextent',
            handler: this.zoomExtent
        });
        actions["max_extent"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));
        toolbarItems.push("-");

        action = Ext.create('GeoExt.Action', {
            control: new OpenLayers.Control.ZoomOut(),
            map: map,
            tooltip: "Zoom Out",
            iconCls: 'zoomout'
        });
        actions["zoomout"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));

        action = Ext.create('GeoExt.Action', {
            control: new OpenLayers.Control.ZoomIn(),
            map: map,
            tooltip: "Zoom In",
            iconCls: 'zoomin'
        });
        actions["zoomin"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));
        toolbarItems.push("-");


        ctrl = new OpenLayers.Control.NavigationHistory();
        map.addControl(ctrl);


        action = Ext.create('GeoExt.Action', {
            iconCls: 'zoomlast',
            control: ctrl.previous,
            disabled: true,
            tooltip: "previous in history"
        });
        actions["zoomlast"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));

        action = Ext.create('GeoExt.Action', {
            iconCls: 'zoomnext',
            control: ctrl.next,
            disabled: true,
            tooltip: "next in history"
        });
        actions["zoomnext"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));
        toolbarItems.push("-");


        action = Ext.create('GeoExt.Action', {
            iconCls: "zoombox",
            control: new OpenLayers. Control.ZoomBox({
                displayClass:'cursor_zoombox'
            }),
            map: map,
            toggleGroup: "draw",
            allowDepress: false,
            tooltip: "Zoom Box",
            // check item options
            group: "draw",
            checked: false,
            scope: this,
            handler: this.pan

        });
        actions["zoombox"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));


        action = Ext.create('GeoExt.Action', {
            iconCls: "pan",
            control: new OpenLayers.Control.Navigation(),
            map: map,
            toggleGroup: "draw",
            allowDepress: false,
            pressed: true,
            tooltip: "Pan",
            // check item options
            group: "draw",
            checked: true,
            scope: this,
            handler: this.pan

        });
        actions["pan"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));

        action = Ext.create('Ext.Action', {
            iconCls: "info",
            toggleGroup: "draw",
            allowDepress: false,
            tooltip: "Info",
            group: "draw",
            checked: false,
            scope: this,
            handler: this.info
        });
        actions["info"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));
        toolbarItems.push("-");

        var layerAnalisa = new OpenLayers.Layer.Vector("Analisis");

        map.addLayer(layerAnalisa);

        layerAnalisa.events.on({
            scope: this,
            sketchcomplete: this.sketchcomplete
        });

        action = Ext.create('GeoExt.Action', {
            iconCls: "analisis",
            control: new OpenLayers.Control.DrawFeature(layerAnalisa, OpenLayers.Handler.Point),
            map: map,
            // button options
            toggleGroup: "draw",
            allowDepress: false,
            tooltip: "Analisa",
            // check item options
            group: "draw",
            checked: false,
            scope: this,
            handler: this.pan
        });
        actions["analisa"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));


        var sketchSymbolizersMeasure = {
            "Line": {
                strokeWidth: 3,
                strokeOpacity: 1,
                strokeColor: "#666666",
                strokeDashstyle: "dash"
            }
        };

        var styleMeasure = new OpenLayers.Style();
        styleMeasure.addRules([
            new OpenLayers.Rule({symbolizer: sketchSymbolizersMeasure})
        ]);
        var styleMapMeasure = new OpenLayers.StyleMap({"default": styleMeasure});

        // allow testing of specific renderers via "?renderer=Canvas", etc
        var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
        renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;

        var controlMeasure = new OpenLayers.Control.Measure(
            OpenLayers.Handler.Path, {
                persist: false,
				handlerOptions: {
                    layerOptions: {
                        renderers: renderer,
                        styleMap: styleMapMeasure
                    }
                }
            }
        );

        action = Ext.create('GeoExt.Action', {
            iconCls: "measure",
            control: controlMeasure,
            map: map,
            // button options
            toggleGroup: "draw",
            allowDepress: false,
            tooltip: "Ukur Jarak",
            // check item options
            group: "draw",
            checked: false,
            scope: this,
            handler: this.pan
        });
        actions["measure"] = action;
        toolbarItems.push(Ext.create('Ext.button.Button', action));


        controlMeasure.events.on({
            scope : this,
            "measure": this.handleMeasurements
        });






        /*
         action = Ext.create('GeoExt.Action', {
         //control: new OpenLayers.Control.ZoomToMaxExtent(),
         map: map,
         tooltip: "TEst",
         iconCls : 'info',
         scope : this,
         handler : this.getLegendTo
         });
         actions["test"] = action;
         toolbarItems.push(Ext.create('Ext.button.Button', action));
         toolbarItems.push("-");
         */


        this.tbar = toolbarItems;
        this.callParent(arguments);
    },
    zoomExtent: function () {
        var map = TPA.app.globals.map;
        map.setCenter(new OpenLayers.LonLat(115.095, -8.376), 10);
    },
    info: function () {

        var map = TPA.app.globals.map;


        if (this.infoControl != null) {
            this.infoControl.deactivate();
            map.removeControl(this.infoControl);
            this.infoControl = null;
        }
        if (this.legend.getSelectionModel().getCount() > 0) {
            if (!this.infoEvent) {
                this.legend.getSelectionModel().on({
                    scope: this,
                    selectionchange: this.selectionchange
                })
                this.infoEvent = true;
            }
            var record = this.legend.getSelectionModel().getSelection()[0]

            this.recordLayer = record.data.layer;

            this.infoControl = new OpenLayers.Control.SelectFeature(record.data.layer,
                {
                    scope: this,
                    onSelect: this.onInfoSelect,
                    onUnselect: this.onInfoUnselect
                });
            map.addControl(this.infoControl);
            this.infoControl.activate();
            this.infoState = true;
            TPA.app.globals.infoState = true
            TPA.app.globals.infoControl = this.infoControl
            //console.log(record.data.layer)
        }

    },
    pan: function () {
        var map = TPA.app.globals.map;
        if (this.infoState) {
            if (this.popup != null) {
                this.popup.close()
            }
            if (this.infoControl != null) {
                this.infoControl.deactivate();
                map.removeControl(this.infoControl);
                this.infoControl = null;
                TPA.app.globals.infoControl = null
            }
            this.infoState = false;
            TPA.app.globals.infoState = false


        }

    },
    onInfoSelect: function (feature) {
        var data = feature.data


        var html = "";

        for (d in data) {
            html += d + " : " + data[d] + "<br/>";
        }

        this.popup = Ext.create('GeoExt.window.Popup', {
            title: 'Identify',
            location: feature,
            width: 200,
            html: html,
            maximizable: true,
            collapsible: true,
            anchorPosition: 'auto'
        });

        var infoControl = this.infoControl;

        this.popup.on({
            scope: this,
            close: function () {
                if (OpenLayers.Util.indexOf(this.recordLayer.selectedFeatures,
                    feature) > -1) {
                    this.infoControl.unselect(feature);
                }
            }
        });

        this.popup.show()
        //console.log()
        //console.log(Ext.toArray(data))
    },
    onInfoUnselect: function (feature) {
        //this.infoControl.unselect(feature)
        this.popup.close()
    },
    selectionchange: function (model, selected) {
        var record = selected[0];
        var map = TPA.app.globals.map;

        if (this.infoState) {

            if (this.recordLayer != null) {

                if (this.recordLayer.id != record.data.layer.id) {
                    if (this.infoControl != null) {
                        this.infoControl.deactivate();
                        map.removeControl(this.infoControl);
                        this.infoControl = null;
                    }

                    this.recordLayer = record.data.layer;

                    this.infoControl = new OpenLayers.Control.SelectFeature(record.data.layer,
                        {
                            onSelect: this.onInfoSelect,
                            onUnselect: this.onInfoUnselect
                        });
                    map.addControl(this.infoControl);
                    this.infoControl.activate();
                    TPA.app.globals.infoControl = this.infoControl
                }
            }
        }
    },
    sketchcomplete: function (event) {
        var feature = event.feature;
        var x = feature.geometry.x;
        var y = feature.geometry.y;



        //console.log(feature.id)



        var analisa = Ext.getCmp('TPA.view.analisa.window');

        if (analisa) {
            Ext.Msg.show({
                title: 'Error',
                msg: 'Analisa window masih aktif<br> Tutup dulu sebelum melakukan analisa di titik lain ',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });

            return;
        }

        Ext.Ajax.request({
            url: 'php/analisa.php',
            method: 'POST',
            params: {
                x: x,
                y: y
            },
            success: function (response) {


                var result = Ext.JSON.decode(response.responseText);

                //console.log(result);

                if (result.success) {

                    var win = Ext.create('TPA.view.analisa.window',{
                        result : result

                    });

                    win.show();

                    win.animate({
                        duration: 500,
                        to: {
                            opacity: 0
                        }
                    }).animate({
                            duration: 500,
                            to: {
                                opacity: 100
                            }
                        });


                } else {
                    Ext.Msg.show({
                        title: 'Error',
                        msg: 'Nilai yang di masukkan belum lengkap cek di menu layer, masukkan semua nilai atau cek di maintenance fuzzy atau <br> Anda Memasukkan di luar klungkung',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                }



            }
        });



        //console.log(feature)
    },
    handleMeasurements : function(event) {
        var win = Ext.getCmp('TPA.view.measure.window');
        var units = event.units;
        var measure = event.measure;

        var html = measure + " " + units;

        if (!win) {
            win = Ext.create('TPA.view.measure.window');
            win.html = html;
            win.show();
        } else {
            win.close();
            win = Ext.create('TPA.view.measure.window');
            win.html = html;
            win.show();
        }
    }
});