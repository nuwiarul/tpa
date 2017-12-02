/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.jenis_tanah.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.jenis_tanah.window',
    alias : 'widget.Grafik_JenisTanahWindow',
    title : 'Grafik Jenis Tanah',

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
        
        var grafik = Ext.create('TPA.view.grafik.jenis_tanah.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
