/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.kemiringan.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.kemiringan.window',
    alias : 'widget.Grafik_KemiringanWindow',
    title : 'Grafik Kemiringan',

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
        
        var grafik = Ext.create('TPA.view.grafik.kemiringan.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
