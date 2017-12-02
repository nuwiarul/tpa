/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.layer.geologi.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.layer.geologi.window',
    alias : 'widget.Layer_GeologiWindow',
    title : 'Maintenance Geologi',

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
        
        var grid = Ext.create('TPA.view.layer.geologi.grid');
        var form = Ext.create('TPA.view.layer.geologi.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
