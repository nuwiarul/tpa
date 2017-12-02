Ext.define('TPA.controller.kemiringans', {
    extend: 'Ext.app.Controller',
    views: [
        'layer.kemiringan.window'
    ],
    stores: [
        'kemiringans'
    ],
    models: ['kemiringan'],
    layer : null,
    select : null,
    init: function () {
        /*
        this.control({


            'Grafik_SurveyorPanel > form button[action=proses]': {
                click: this.proses
            }
        });
        */

        this.control({

            'Layer_KemiringanWindow > grid': {
                itemclick : this.selectionchange
            },
            'Layer_KemiringanWindow > form button[action=save]': {
                click: this.save
            },
            'Layer_KemiringanWindow > form button[action=close]': {
                click : this.close
            },
            'Layer_KemiringanWindow': {
                show : this.show
            }
        });

        var rules = [
            new OpenLayers.Rule({
                title: ">40%",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kelerengan",
                    value: ">40%"
                }),
                symbolizer: {
                    fillColor: "#ff5613",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "0 - 3%",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kelerengan",
                    value: "0 - 3%"
                }),
                symbolizer: {
                    fillColor: "#ff9813",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "3 - 8%",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kelerengan",
                    value: "3 - 8%"
                }),
                symbolizer: {
                    fillColor: "#ffca13",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "8 - 15%",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kelerengan",
                    value: "8 - 15%"
                }),
                symbolizer: {
                    fillColor: "#dbff13",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "15 - 25%",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kelerengan",
                    value: "15 - 25%"
                }),
                symbolizer: {
                    fillColor: "#66ff13",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "25 - 40%",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kelerengan",
                    value: "25 - 40%"
                }),
                symbolizer: {
                    fillColor: "#13ff56",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            })

        ];

        var default_style = new
            OpenLayers.Style(OpenLayers.Util.applyDefaults({
            fillColor: "#ffcc66",
            strokeColor: "#ff9933",
            strokeWidth: 2,
            graphicZIndex: 1
        }),{
            rules:rules
        });

        var map = TPA.app.globals.map;

        var myStyles = new OpenLayers.StyleMap({

            "default": default_style,
            "select": new OpenLayers.Style({
                fillColor: "#66ccff",
                strokeColor: "#3399ff",
                graphicZIndex: 2
            })
        });

        var vecLayer = new OpenLayers.Layer.Vector("Kemiringan", {
            styleMap: myStyles,
            protocol: new OpenLayers.Protocol.HTTP({
                url: "php/kemiringan.php",
                format: new OpenLayers.Format.GeoJSON()
            }),
            strategies: [new OpenLayers.Strategy.Fixed()]
        });

        this.getStore('kemiringans').bind(vecLayer);

        this.layer = vecLayer;
        /*
        this.select = new OpenLayers.Control.SelectFeature(vecLayer);
        map.addControl(this.select);
        this.select.activate();
        */


        map.addLayer(vecLayer);


    },
    selectionchange : function(grid, item) {
        var record = grid.getSelectionModel().getSelection()[0];

        var view = Ext.getCmp('TPA.view.layer.kemiringan.window');
        view.down('form').loadRecord(record);

        //var feature = this.layer.getFeatureById(record.data.gid);
        //console.log(feature)

        this.select.unselectAll();
        var feature = this.layer.features;
        var selectFeature;
        for ( i=0; i < feature.length ; i++) {
            if (feature[i].data.gid == record.data.gid) {
                selectFeature = feature[i];
                break;
            }
        }

        this.select.select(selectFeature);

    },
    close : function() {


        this.select.unselectAll();
        var map = TPA.app.globals.map;
        this.select.deactivate();
        map.removeControl(this.select);
        this.select = null;

        if (TPA.app.globals.infoState) {
            TPA.app.globals.infoControl = this.tempControl;
            map.addControl(TPA.app.globals.infoControl);
            TPA.app.globals.infoControl.activate()
            this.tempControl = null;
        }
    },
    show: function() {
        var map = TPA.app.globals.map;
        if (TPA.app.globals.infoState) {
            //console.log(TPA.app.globals.infoControl)
            this.tempControl = TPA.app.globals.infoControl
            TPA.app.globals.infoControl.deactivate()
            map.removeControl(TPA.app.globals.infoControl);
            TPA.app.globals.infoControl = null;
        }
        this.select = new OpenLayers.Control.SelectFeature(this.layer);
        map.addControl(this.select);
        this.select.activate();
        //console.log(map.getControlsByClass(OpenLayers.Control.SelectFeature))
    },
    save: function (button) {
        var form = button.up('form');
        var values = form.getValues();

        this.edit = false;
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: 'php/simpan_kemiringan.php',
                scope: this,
                success: function (f, a) {
                    //this.getHidrologisStore().load()
                    this.layer.refresh()
                    form.getForm().reset()

                },
                failure: function (form, action) {
                    Ext.Msg.show({
                        title: 'Error',
                        msg: 'Error Koneksi ke Server',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                }


            });
        }
    }


});