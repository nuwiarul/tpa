Ext.define('TPA.controller.grafik.kemiringans', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.kemiringan.window'
    ],
    stores: [
        'grafik.kemiringans'
    ],
    models: ['grafik.kemiringan'],
    edit : false,
    init: function () {

    }

});