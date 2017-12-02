/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.kemiringan.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.kemiringan.window',
    alias : 'widget.Maintenance_KemiringanWindow',
    title : 'Maintenance Kemiringan Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.kemiringan.grid');
        var form = Ext.create('TPA.view.maintenance.kemiringan.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
