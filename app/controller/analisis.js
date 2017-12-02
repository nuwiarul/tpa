Ext.define('TPA.controller.analisis', {
    extend: 'Ext.app.Controller',
    views: [
        'analisa.window',
        'hitung.window'
    ],
    stores: [
        'grafik.geologis',
        'grafik.hidrologis',
        'grafik.garis_pantais',
        'grafik.sungai_besars',
        'grafik.land_uses',
        'grafik.jenis_tanahs',
        'grafik.rawan_bencanas',
        'grafik.kemiringans'
    ],
    models: [],
    layer: null,
    select: null,
    init: function () {
        this.control({


            'Analisa_Window > form button[action=hitung_geologi]': {
                click: this.hitung_geologi
            },
            'Analisa_Window > form button[action=hitung_hidrologi]': {
                click: this.hitung_hidrologi
            },
            'Analisa_Window > form button[action=hitung_garis_pantai]': {
                click: this.hitung_garis_pantai
            },
            'Analisa_Window > form button[action=hitung_sungai]': {
                click: this.hitung_sungai
            },
            'Analisa_Window > form button[action=hitung_land_use]': {
                click: this.hitung_land_use
            },
            'Analisa_Window > form button[action=hitung_jenis_tanah]': {
                click: this.hitung_jenis_tanah
            },
            'Analisa_Window > form button[action=hitung_rawan_bencana]': {
                click: this.hitung_rawan_bencana
            },
            'Analisa_Window > form button[action=hitung_kemiringan]': {
                click: this.hitung_kemiringan
            },
            'Analisa_Window > form button[action=chart_geologi]': {
                click: this.chart_geologi
            },
            'Analisa_Window > form button[action=chart_hidrologi]': {
                click: this.chart_hidrologi
            },
            'Analisa_Window > form button[action=chart_sungai]': {
                click: this.chart_sungai
            },
            'Analisa_Window > form button[action=chart_garis_pantai]': {
                click: this.chart_garis_pantai
            },
            'Analisa_Window > form button[action=chart_land_use]': {
                click: this.chart_land_use
            },
            'Analisa_Window > form button[action=chart_jenis_tanah]': {
                click: this.chart_jenis_tanah
            },
            'Analisa_Window > form button[action=chart_rawan_bencana]': {
                click: this.chart_rawan_bencana
            },
            'Analisa_Window > form button[action=chart_kemiringan]': {
                click: this.chart_kemiringan
            },
            'Analisa_Window > form button[action=proses]': {
                click: this.proses
            }
        });

    },
    hitung_geologi: function (button) {
        var view = button.up('window');
        var geologi = view.result.geologi;
        var store = this.getStore('maintenance.geologis');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: geologi.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Geologis');
                win.show();

            }
        })


    },
    chart_geologi: function (button) {
        var view = button.up('window');


        var geologi = view.result.geologi;

        var store = this.getStore('maintenance.geologis');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: geologi.nilai,
                    ti: "Grafik Fuzzy Layer Geologi",
                    te: "Nilai Geologi",
                    animateTarget: button
                });
                win.setTitle("Grafik Geologi");
                win.show();

            }
        });

    },
    hitung_hidrologi: function (button) {
        var view = button.up('window');


        var hidrologi = view.result.hidrologi;

        var store = this.getStore('maintenance.hidrologis');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: hidrologi.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Hidrologis');
                win.show();

            }
        });
    },
    chart_hidrologi: function (button) {
        var view = button.up('window');


        var hidrologi = view.result.hidrologi;

        var store = this.getStore('maintenance.hidrologis');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: hidrologi.nilai,
                    ti: "Grafik Fuzzy Layer Hidrologi",
                    te: "Nilai Hidrologi",
                    animateTarget: button
                });
                win.setTitle("Grafik Hidrologi");
                win.show();

            }
        });

    },
    hitung_garis_pantai: function (button) {
        var view = button.up('window');


        var garis_pantai = view.result.garis_pantai;

        var store = this.getStore('maintenance.garis_pantais');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: garis_pantai.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Garis Pantai');
                win.show();

            }
        });
    },
    chart_garis_pantai: function (button) {
        var view = button.up('window');


        var garis_pantai = view.result.garis_pantai;

        var store = this.getStore('maintenance.garis_pantais');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: garis_pantai.nilai,
                    ti: "Grafik Fuzzy Layer Garis Pantai",
                    te: "Jarak Garis Pantai",
                    animateTarget: button
                });
                win.setTitle("Grafik Garis Pantai");
                win.show();

            }
        });

    },
    hitung_sungai: function (button) {
        var view = button.up('window');


        var sungai_besar = view.result.sungai_besar;

        var store = this.getStore('maintenance.sungai_besars');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: sungai_besar.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Sungai');
                win.show();

            }
        });
    },
    chart_sungai: function (button) {
        var view = button.up('window');


        var sungai_besar = view.result.sungai_besar;

        var store = this.getStore('maintenance.sungai_besars');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: sungai_besar.nilai,
                    ti: "Grafik Fuzzy Layer Sungai",
                    te: "Jarak Sungai",
                    animateTarget: button
                });
                win.setTitle("Grafik Sungai");
                win.show();

            }
        });

    },
    hitung_land_use: function (button) {
        var view = button.up('window');


        var land_use = view.result.land_use;

        var store = this.getStore('maintenance.land_uses');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: land_use.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Land Use');
                win.show();

            }
        });
    },
    chart_land_use: function (button) {
        var view = button.up('window');


        var land_use = view.result.land_use;

        var store = this.getStore('maintenance.land_uses');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: land_use.nilai,
                    ti: "Grafik Fuzzy Layer Land Use",
                    te: "Nilai Land Use",
                    animateTarget: button
                });
                win.setTitle("Grafik Land Use");
                win.show();

            }
        });

    },
    hitung_jenis_tanah: function (button) {
        var view = button.up('window');


        var jenis_tanah = view.result.jenis_tanah;

        var store = this.getStore('maintenance.jenis_tanahs');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: jenis_tanah.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Jenis Tanah');
                win.show();

            }
        });
    },
    chart_jenis_tanah: function (button) {
        var view = button.up('window');


        var jenis_tanah = view.result.jenis_tanah;

        var store = this.getStore('maintenance.jenis_tanahs');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: jenis_tanah.nilai,
                    ti: "Grafik Fuzzy Layer Jenis Tanah",
                    te: "Nilai Jenis Tanah",
                    animateTarget: button
                });
                win.setTitle("Grafik Jenis Tanah");
                win.show();

            }
        });

    },
    hitung_rawan_bencana: function (button) {
        var view = button.up('window');


        var rawan_bencana = view.result.rawan_bencana;

        var store = this.getStore('maintenance.rawan_bencanas');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: rawan_bencana.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Rawan Bencana');
                win.show();

            }
        });
    },
    chart_rawan_bencana: function (button) {
        var view = button.up('window');


        var rawan_bencana = view.result.rawan_bencana;

        var store = this.getStore('maintenance.rawan_bencanas');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: rawan_bencana.nilai,
                    ti: "Grafik Fuzzy Layer Rawan Bencana",
                    te: "Nilai Rawan Bencana",
                    animateTarget: button
                });
                win.setTitle("Grafik Rawan Bencana");
                win.show();

            }
        });

    },
    hitung_kemiringan: function (button) {
        var view = button.up('window');


        var kemiringan = view.result.kemiringan;
        var store = this.getStore('maintenance.kemiringans');
        store.load({
            scope: this,
            callback: function (records, operation, success) {


                var win = Ext.create('TPA.view.hitung.window', {
                    records: records,
                    nilai: kemiringan.nilai,
                    animateTarget: button
                });
                win.setTitle('Perhitungan Nilai Fuzzy Kemiringan');
                win.show();

            }
        });
    },
    chart_kemiringan: function (button) {
        var view = button.up('window');


        var kemiringan = view.result.kemiringan;

        var store = this.getStore('maintenance.kemiringans');
        store.load({
            scope: this,
            callback: function (records, operation, success) {
                var win = Ext.create('TPA.view.grafik.window', {
                    records: records,
                    nilai: kemiringan.nilai,
                    ti: "Grafik Fuzzy Layer Kemiringan",
                    te: "Nilai Kemiringan",
                    animateTarget: button
                });
                win.setTitle("Grafik Kemiringan");
                win.show();

            }
        });

    },
    proses : function(button) {
        var view = button.up('window');

        var win = Ext.create('TPA.view.proses.window',{
            animateTarget: button,
            result : view.result
        });
        win.show();
    }


});