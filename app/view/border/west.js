/**
 * Created with JetBrains WebStorm.
 * User: arul
 * Date: 8/28/13
 * Time: 8:00 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('TPA.view.border.west', {
    extend: 'GeoExt.tree.Panel',
    alias: 'widget.WestPanel',
    requires: [
        'GeoExt.data.LayerStore',
        'GeoExt.tree.Panel',
        'Ext.tree.plugin.TreeViewDragDrop',
        'GeoExt.panel.Map',
        'GeoExt.tree.OverlayLayerContainer',
        'GeoExt.tree.BaseLayerContainer',
        'GeoExt.data.LayerTreeModel',
        'GeoExt.tree.View',
        'GeoExt.container.VectorLegend',
        'GeoExt.tree.Column',
        // We need to require this class, even though it is used by Ext.EventObjectImpl
        // see: http://www.sencha.com/forum/showthread.php?262124-Missed-(-)-dependency-reference-to-a-Ext.util.Point-in-Ext.EventObjectImpl
        'Ext.util.Point'
    ],
    region: 'west',
    split: true,
    width: 300,
    minWidth: 100,
    title: "Legenda",
    autoScroll: true,
    viewConfig: {
        plugins: [
            {
                ptype: 'treeviewdragdrop',
                appendOnly: false
            }
        ]
    },

    rootVisible: false,
    lines: false,
    mapPanel: null,
    initComponent: function () {


        var mapPanel = this.mapPanel;

        var store = Ext.create('Ext.data.TreeStore', {
            model: 'GeoExt.data.LayerTreeModel',
            root: {
                plugins: [
                    {
                        ptype: "gx_layercontainer",
                        loader: {

                            filter: function (record) {
                                //console.log(record.getLayer())
                                return record.getLayer() instanceof OpenLayers.Layer.Vector && record.getLayer().name != "OpenLayers.Handler.Point"
                                    && record.getLayer().name != "Analisis" && record.getLayer().name != "OpenLayers.Handler.Path";
                            },
                            createNode: function (attr) {
                                // add a WMS legend to each node created
                                attr.component = {
                                    xtype: "gx_vectorlegend",
                                    layerRecord: mapPanel.layers.getByLayer(attr.layer),
                                    showTitle: false,
                                    // custom class for css positioning
                                    // see tree-legend.html
                                    cls: "legend"
                                };
                                return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
                            }
                        }
                    }
                ]
            }
        });

        this.store = store;

        this.callParent(arguments);
    }
});
