/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.rawan_bencana.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.rawan_bencana.window',
    alias : 'widget.Grafik_RawanBencanaWindow',
    title : 'Grafik Rawan Bencana',

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
        
        var grafik = Ext.create('TPA.view.grafik.rawan_bencana.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
