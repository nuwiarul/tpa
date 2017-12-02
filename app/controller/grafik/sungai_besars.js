Ext.define('TPA.controller.grafik.sungai_besars', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.sungai_besar.window'
    ],
    stores: [
        'grafik.sungai_besars'
    ],
    models: ['grafik.sungai_besar'],
    edit : false,
    init: function () {

    }

});