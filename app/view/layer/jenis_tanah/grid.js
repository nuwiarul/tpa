/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('TPA.view.layer.jenis_tanah.grid', {
    extend: 'Ext.grid.Panel',
    flex: 1,
    store: 'jenis_tanahs',
    selType: 'featuremodel',
    initComponent: function () {
        /*
        var selModel = Ext.create('Ext.selection.CheckboxModel', {
            mode: 'SINGLE',
            allowDeselect: true,
            listeners: {
                scope: this,
                selectionchange: function (sm, selections) {
                    this.down('#edit').setDisabled(selections.length == 0);
                    this.down('#delete').setDisabled(selections.length == 0);
                }
            }
        });
        */

        var selModel = Ext.create('Ext.selection.CheckboxModel', {
            mode: 'SINGLE',
            allowDeselect: true
        });

        this.selModel = selModel;


        this.columns = [

            {
                header: 'Tanah',
                dataIndex: 'tanah'

            },
            {
                header: 'Nilai',
                dataIndex: 'nilai'

            }
        ];





        this.callParent(arguments);
    }
});
