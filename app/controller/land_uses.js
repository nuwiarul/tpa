Ext.define('TPA.controller.land_uses', {
    extend: 'Ext.app.Controller',
    views: [
        'layer.land_use.window'
    ],
    stores: [
        'land_uses'
    ],
    models: ['land_use'],
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

            'Layer_LandUseWindow > grid': {
                itemclick : this.selectionchange
            },
            'Layer_LandUseWindow > form button[action=save]': {
                click: this.save
            },
            'Layer_LandUseWindow > form button[action=close]': {
                click : this.close
            },
            'Layer_LandUseWindow': {
                show : this.show
            }
        });


        var rules = [
            new OpenLayers.Rule({
                title: "Rawa",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "RAWA"
                }),
                symbolizer: {
                    fillColor: "#fa7b84",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Air Tawar",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "AIR TAWAR"
                }),
                symbolizer: {
                    fillColor: "#fa7bb1",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Kebun",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "KEBUN"
                }),
                symbolizer: {
                    fillColor: "#fa7bf3",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Sawah Irigasi",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "SAWAH IRIGASI"
                }),
                symbolizer: {
                    fillColor: "#c97bfa",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Belukar",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "BELUKAR"
                }),
                symbolizer: {
                    fillColor: "#8d7bfa",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Tanah Berbatu",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "TANAH BERBATU"
                }),
                symbolizer: {
                    fillColor: "#7bd5fa",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Hutan Rawa",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "HUTAN RAWA"
                }),
                symbolizer: {
                    fillColor: "#7bfad8",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Pemukiman",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "PEMUKIMAN"
                }),
                symbolizer: {
                    fillColor: "#7bfa9c",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Tanah Ladang",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "TANAH LADANG"
                }),
                symbolizer: {
                    fillColor: "#c9fa7b",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Rumput",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "RUMPUT"
                }),
                symbolizer: {
                    fillColor: "#f9fa7b",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Sawah Tadah Hujan",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "SAWAH TADAH HUJAN"
                }),
                symbolizer: {
                    fillColor: "#fad27b",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Gedung",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "keterangan",
                    value: "GEDUNG"
                }),
                symbolizer: {
                    fillColor: "#fa9f7b",
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

        var vecLayer = new OpenLayers.Layer.Vector("Land Use", {
            styleMap: myStyles,
            protocol: new OpenLayers.Protocol.HTTP({
                url: "php/land_use.php",
                format: new OpenLayers.Format.GeoJSON()
            }),
            strategies: [new OpenLayers.Strategy.Fixed()]
        });

        this.getStore('land_uses').bind(vecLayer);

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

        var view = Ext.getCmp('TPA.view.layer.land_use.window');
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
                url: 'php/simpan_land_use.php',
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