/**
 * Created by arul on 3/4/14.
 */
/**
 * The GeoExt.panel.Map used in the application.  Useful to define map options
 * and stuff.
 * @extends GeoExt.panel.Map
 */
Ext.define('TPA.view.map', {

    extend: 'GeoExt.panel.Map',
    alias : 'widget.tpa_mappanel',
    border: 'false',

    //center: '115.095, -8.376',
    /*center : new OpenLayers.LonLat(115.095, -8.376).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()),
    zoom: 5, */

    initComponent: function() {
        var me = this

        Ext.apply(me, {
            map: TPA.app.globals.map
        });



        //console.log(map.layers)
        //legend.render()

        me.callParent(arguments);
    }
});
