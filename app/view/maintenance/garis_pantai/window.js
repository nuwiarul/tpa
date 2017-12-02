/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.garis_pantai.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.garis_pantai.window',
    alias : 'widget.Maintenance_GarisPantaiWindow',
    title : 'Maintenance Garis Pantai Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.garis_pantai.grid');
        var form = Ext.create('TPA.view.maintenance.garis_pantai.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
