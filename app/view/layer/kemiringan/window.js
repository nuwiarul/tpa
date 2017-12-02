/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.layer.kemiringan.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.layer.kemiringan.window',
    alias : 'widget.Layer_KemiringanWindow',
    title : 'Maintenance Kemiringan',

    layout : {
        type : 'hbox',
        pack : 'start',
        align : 'stretch'
    },
    defaults : {
        frame : true
    },
    width : 600,
    height : 300,
    initComponent: function() {
        
        var grid = Ext.create('TPA.view.layer.kemiringan.grid');
        var form = Ext.create('TPA.view.layer.kemiringan.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
