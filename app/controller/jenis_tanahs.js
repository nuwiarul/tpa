Ext.define('TPA.controller.jenis_tanahs', {
    extend: 'Ext.app.Controller',
    views: [
        'layer.jenis_tanah.window'
    ],
    stores: [
        'jenis_tanahs'
    ],
    models: ['jenis_tanah'],
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

            'Layer_JenisTanahWindow > grid': {
                itemclick : this.selectionchange
            },
            'Layer_JenisTanahWindow > form button[action=save]': {
                click: this.save
            },
            'Layer_JenisTanahWindow > form button[action=close]': {
                click : this.close
            },
            'Layer_JenisTanahWindow': {
                show : this.show
            }
        });

        var rules = [
            new OpenLayers.Rule({
                title: "Regosol Kelabu",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "tanah",
                    value: "Regosol Kelabu"
                }),
                symbolizer: {
                    fillColor: "#9eb0f4",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Regosol Coklat Kekuningan",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "tanah",
                    value: "Regosol Coklat Kekuningan"
                }),
                symbolizer: {
                    fillColor: "#9ef4b8",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Regosol Coklat Kelabu",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "tanah",
                    value: "Regosol Coklat Kelabu"
                }),
                symbolizer: {
                    fillColor: "#f4ed9e",
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

        var vecLayer = new OpenLayers.Layer.Vector("Jenis Tanah", {
            styleMap: myStyles,
            protocol: new OpenLayers.Protocol.HTTP({
                url: "php/jenis_tanah.php",
                format: new OpenLayers.Format.GeoJSON()
            }),
            strategies: [new OpenLayers.Strategy.Fixed()]
        });

        this.getStore('jenis_tanahs').bind(vecLayer);

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

        var view = Ext.getCmp('TPA.view.layer.jenis_tanah.window');
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
                url: 'php/simpan_jenis_tanah.php',
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