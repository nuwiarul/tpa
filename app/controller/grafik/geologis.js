Ext.define('TPA.controller.grafik.geologis', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.geologi.window'
    ],
    stores: [
        'grafik.geologis'
    ],
    models: ['grafik.geologi'],
    edit : false,
    init: function () {

    }

});