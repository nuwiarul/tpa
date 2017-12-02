/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.sungai_besar.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.maintenance.sungai_besar.window',
    alias : 'widget.Maintenance_SungaiBesarWindow',
    title : 'Maintenance Sungai Besar Fuzzy',

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
        
        var grid = Ext.create('TPA.view.maintenance.sungai_besar.grid');
        var form = Ext.create('TPA.view.maintenance.sungai_besar.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
