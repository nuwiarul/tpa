/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.dss.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.dss.window',
    alias : 'widget.Maintenance_DssWindow',
    title : 'Maintenance Dss',

    layout : {
        type : 'hbox',
        pack : 'start',
        align : 'stretch'
    },
    defaults : {
        frame : true
    },
    width : 600,
    height : 350,
    initComponent: function() {
        
        var grid = Ext.create('TPA.view.maintenance.dss.grid');
        var form = Ext.create('TPA.view.maintenance.dss.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
