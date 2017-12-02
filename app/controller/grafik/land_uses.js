Ext.define('TPA.controller.grafik.land_uses', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.land_use.window'
    ],
    stores: [
        'grafik.land_uses'
    ],
    models: ['grafik.land_use'],
    edit : false,
    init: function () {

    }

});