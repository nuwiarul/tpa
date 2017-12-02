/**
 * Created with JetBrains WebStorm.
 * User: arul
 * Date: 8/28/13
 * Time: 8:00 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('TPA.view.border.west', {
    extend: 'GeoExt.panel.Legend',
    alias: 'widget.WestPanel',
    requires: [

        'GeoExt.container.UrlLegend',
        'GeoExt.container.VectorLegend'
    ],
    region: 'west',
    split: true,
    width: 200,
    minWidth: 100,
    title: "Legenda",
    autoScroll: true,
    defaults: {
        labelCls: 'mylabel',
        style: 'padding:5px'
    },
    bodyStyle: 'padding:5px',

    mapPanel: null,
    initComponent: function () {



        var mapPanel = this.mapPanel;


        this.callParent(arguments);
    }
});
