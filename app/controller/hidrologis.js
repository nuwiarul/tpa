Ext.define('TPA.controller.hidrologis', {
    extend: 'Ext.app.Controller',
    views: [
        'layer.hidrologi.window'
    ],
    stores: [
        'hidrologis'
    ],
    models: ['hidrologi'],
    layer: null,
    select: null,
    tempControl : null,
    init: function () {
        /*
         this.control({


         'Grafik_SurveyorPanel > form button[action=proses]': {
         click: this.proses
         }
         });
         */

        this.control({

            'Layer_HidrologiWindow > grid': {
                itemclick: this.selectionchange
            },
            'Layer_HidrologiWindow > grid selection': {
                selectionchange: this.change
            },

            'Layer_HidrologiWindow > form button[action=save]': {
                click: this.save
            },
            'Layer_HidrologiWindow > form button[action=close]': {
                click : this.tutup
            },
            'Layer_HidrologiWindow': {
                show: this.show
            }
        });

        var rules = [
            new OpenLayers.Rule({
                title: "setempat kandungan air besar 10 l/dt",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kandungan",
                    value: "setempat kandungan air besar 10 l/dt"
                }),
                symbolizer: {
                    fillColor: "#f2bcc1",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Debit Sumur Kurang dari 2 l/dt",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kandungan",
                    value: "Debit Sumur Kurang dari 2 l/dt"
                }),
                symbolizer: {
                    fillColor: "#d7bcf2",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Debit Sumur 10 l/dt",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kandungan",
                    value: "Debit Sumur 10 l/dt"
                }),
                symbolizer: {
                    fillColor: "#bcf2e7",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Debit Sumur kurang dari 5 l/dt",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kandungan",
                    value: "Debit Sumur kurang dari 5 l/dt"
                }),
                symbolizer: {
                    fillColor: "#caf2bc",
                    strokeColor: "#ff9933",
                    strokeWidth: 2,
                    graphicZIndex: 1
                }
            }),
            new OpenLayers.Rule({
                title: "Debit Sumur 5 l/dt",
                //maxScaleDenominator: 3000000,
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "kandungan",
                    value: "Debit Sumur 5 l/dt"
                }),
                symbolizer: {
                    fillColor: "#f2cfbc",
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
                fillColor: "#5f5ff2",
                strokeColor: "#3399ff",
                graphicZIndex: 2
            })
        });

        var vecLayer = new OpenLayers.Layer.Vector("Hidrologi", {
            styleMap: myStyles,
            protocol: new OpenLayers.Protocol.HTTP({
                url: "php/hidrologi.php",
                format: new OpenLayers.Format.GeoJSON()
            }),
            strategies: [new OpenLayers.Strategy.Fixed()]
        });

        this.getHidrologisStore().bind(vecLayer);

        this.layer = vecLayer;

        map.addLayer(vecLayer);




    },
    selectionchange: function (grid, item) {
        var record = grid.getSelectionModel().getSelection()[0];

        var view = Ext.getCmp('TPA.view.layer.hidrologi.window');
        view.down('form').loadRecord(record);


        console.log(grid.getSelectionModel().getSelection().length)


        this.select.unselectAll();
        var feature = this.layer.features;
        var selectFeature;
        for (i = 0; i < feature.length; i++) {
            if (feature[i].data.gid == record.data.gid) {
                selectFeature = feature[i];
                break;
            }
        }

        this.select.select(selectFeature);

    },
    tutup: function () {
        //console.log("TEst Close")
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
    change: function () {
        console.log("TEst Console")
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
                url: 'php/simpan_hidrologi.php',
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