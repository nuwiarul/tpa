/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.sungai_besar.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.sungai_besar.window',
    alias : 'widget.Grafik_SungaiBesarWindow',
    title : 'Grafik Sungai',

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
        
        var grafik = Ext.create('TPA.view.grafik.sungai_besar.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
