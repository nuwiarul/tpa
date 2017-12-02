/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.measure.window', {
    extend: 'Ext.window.Window',
    id: 'TPA.view.measure.window',
    alias: 'widget.Measure_Window',
    title: 'Ukur Jarak',
    layout: {
        type: 'fit',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true
    },
    width: 300,
    height: 100,
    initComponent: function () {



        this.buttons = [{
            text: 'Close',
            iconCls : 'close',
            scope : this,
            handler : function() {
                this.close()
            }

        }];
        this.callParent(arguments);


    }
});
