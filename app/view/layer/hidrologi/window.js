/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.layer.hidrologi.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.layer.hidrologi.window',
    alias : 'widget.Layer_HidrologiWindow',
    title : 'Maintenance HidroLogi',

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
        
        var grid = Ext.create('TPA.view.layer.hidrologi.grid');
        var form = Ext.create('TPA.view.layer.hidrologi.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
