/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.layer.rawan_bencana.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.layer.rawan_bencana.window',
    alias : 'widget.Layer_RawanBencanaWindow',
    title : 'Maintenance Land Use',

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
        
        var grid = Ext.create('TPA.view.layer.rawan_bencana.grid');
        var form = Ext.create('TPA.view.layer.rawan_bencana.form');
        this.items = [grid, form];

        this.callParent(arguments);


    }
});
