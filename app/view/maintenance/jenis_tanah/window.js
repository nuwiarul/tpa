/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.jenis_tanah.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.jenis_tanah.window',
    alias : 'widget.Maintenance_JenisTanahWindow',
    title : 'Maintenance Jenis Tanah Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.jenis_tanah.grid');
        var form = Ext.create('TPA.view.maintenance.jenis_tanah.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
