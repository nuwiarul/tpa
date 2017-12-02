/**
 * Created by arul on 3/4/14.
 */
/**
 * The GeoExt.panel.Map used in the application.  Useful to define map options
 * and stuff.
 * @extends GeoExt.panel.Map
 */
Ext.define('TPA.view.border.map', {
    extend: 'GeoExt.panel.Map',
    alias: 'widget.tpa_mappanel',
    region: 'center',
    center: '115.095, -8.376',
    zoom: 10,

    initComponent: function () {
        var me = this

        Ext.apply(me, {
            map: TPA.app.globals.map
        });


        //console.log(map.layers)
        //legend.render()

        me.callParent(arguments);
    }
});
