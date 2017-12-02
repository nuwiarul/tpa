/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.hidrologi.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.hidrologi.window',
    alias : 'widget.Maintenance_HidrologiWindow',
    title : 'Maintenance Hidrologi Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.hidrologi.grid');
        var form = Ext.create('TPA.view.maintenance.hidrologi.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
