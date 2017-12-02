/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.geologi.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.geologi.window',
    alias : 'widget.Maintenance_GeologiWindow',
    title : 'Maintenance Geologi Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.geologi.grid');
        var form = Ext.create('TPA.view.maintenance.geologi.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
