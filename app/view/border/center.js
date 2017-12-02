/**
 * Created with JetBrains WebStorm.
 * User: arul
 * Date: 8/28/13
 * Time: 7:57 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('TPA.view.border.center', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.CenterPanel',
    id: 'CenterTab',
    region: 'center',
    activeTab: 0,

    initComponent: function () {

        var tab = Ext.create('TPA.view.map');
        tab.title = "Peta TPA";
        //this.add(tab).show();
        this.items = [tab];
        this.callParent(arguments);
    }
});

