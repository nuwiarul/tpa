Ext.define('TPA.controller.grafik.jenis_tanahs', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.jenis_tanah.window'
    ],
    stores: [
        'grafik.jenis_tanahs'
    ],
    models: ['grafik.jenis_tanah'],
    edit : false,
    init: function () {

    }

});