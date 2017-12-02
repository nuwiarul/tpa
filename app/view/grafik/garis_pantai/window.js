/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.garis_pantai.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.garis_pantai.window',
    alias : 'widget.Grafik_GarisPantaiWindow',
    title : 'Grafik Garis Pantai',

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
        
        var grafik = Ext.create('TPA.view.grafik.garis_pantai.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
