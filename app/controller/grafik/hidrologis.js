Ext.define('TPA.controller.grafik.hidrologis', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.hidrologi.window'
    ],
    stores: [
        'grafik.hidrologis'
    ],
    models: ['grafik.hidrologi'],
    edit : false,
    init: function () {

    }

});