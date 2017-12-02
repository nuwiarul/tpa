Ext.define('TPA.controller.grafik.garis_pantais', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.garis_pantai.window'
    ],
    stores: [
        'grafik.garis_pantais'
    ],
    models: ['grafik.garis_pantai'],
    edit : false,
    init: function () {

    }

});