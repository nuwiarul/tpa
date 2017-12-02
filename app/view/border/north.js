/**
 * Created with JetBrains WebStorm.
 * User: arul
 * Date: 8/28/13
 * Time: 7:59 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('TPA.view.border.north', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.NorthPanel',
    region: 'north',
    legend : null,
    initComponent: function () {
        var legend = this.legend
        var menu = Ext.create('TPA.view.border.menu');
        var toolbar = Ext.create('TPA.view.border.toolbar', {
            legend : legend
        });
        //var master = Ext.create('TPA.view.menu.master');
        //var transaksi = Ext.create('TPA.view.menu.transaksi');
        //var laporan = Ext.create('TPA.view.menu.laporan');
        //var grafik = Ext.create('TPA.view.menu.grafik');
        //var settings = Ext.create('TPA.view.menu.settings');
        /*
        this.tbar=[{
            text : 'File',
            menu : file
        }];
        */

        this.items = [menu, toolbar]
        this.callParent(arguments);
    }
});
