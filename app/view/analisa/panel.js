/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('Adit.view.master.jenisproduk.panel' ,{
    extend: 'Ext.panel.Panel',
    id : 'Adit.view.master.jenisproduk.panel',
    alias : 'widget.Master_JenisprodukPanel',
    title : 'Jenis Produk',
    iconCls : 'jenisproduk',
    layout : {
        type : 'vbox',
        pack : 'start',
        align : 'stretch'
    },
    defaults : {
        frame : true
    },

    initComponent: function() {

        //var form = Ext.create('Adit.view.master.jabatan.form');
        var grid = Ext.create('Adit.view.master.jenisproduk.grid');
        this.items = [grid];
        this.callParent(arguments);
    }
});
