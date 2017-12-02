/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.land_use.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.land_use.window',
    alias : 'widget.Maintenance_LandUseWindow',
    title : 'Maintenance Land Use Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.land_use.grid');
        var form = Ext.create('TPA.view.maintenance.land_use.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
