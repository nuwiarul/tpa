/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.land_use.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.land_use.window',
    alias : 'widget.Grafik_LandUseWindow',
    title : 'Grafik Land Use',

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
        
        var grafik = Ext.create('TPA.view.grafik.land_use.chart');

        this.items = [grafik];

        this.callParent(arguments);


    }
});
