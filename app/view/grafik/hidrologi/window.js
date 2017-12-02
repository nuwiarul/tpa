/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.hidrologi.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.hidrologi.window',
    alias : 'widget.Grafik_HidrologiWindow',
    title : 'Grafik Hidrologi',

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
        
        var grafik = Ext.create('TPA.view.grafik.hidrologi.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
