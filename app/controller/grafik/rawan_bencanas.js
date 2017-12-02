Ext.define('TPA.controller.grafik.rawan_bencanas', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.rawan_bencana.window'
    ],
    stores: [
        'grafik.rawan_bencanas'
    ],
    models: ['grafik.rawan_bencana'],
    edit : false,
    init: function () {

    }

});