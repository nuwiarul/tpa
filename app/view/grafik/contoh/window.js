/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.contoh.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.contoh.window',
    alias : 'widget.Grafik_ContohWindow',
    title : 'Grafik Contoh',

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
        
        var grafik = Ext.create('TPA.view.grafik.contoh.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
