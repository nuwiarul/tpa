/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('TPA.view.layer.hidrologi.grid', {
    extend: 'Ext.grid.Panel',
    flex: 1,
    store: 'hidrologis',
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
                header: 'Sub SWS',
                dataIndex: 'sub_sws'

            },
            {
                header: 'Geologi',
                dataIndex: 'geologi'

            },
            {
                header: 'Kandungan',
                dataIndex: 'kandungan'

            },
            {
                header: 'Data',
                dataIndex: 'data'

            },
            {
                header: 'Fuzzy',
                dataIndex: 'fuzzy'

            },
            {
                header: 'Nilai Minimal',
                dataIndex: 'min'

            },
            {
                header: 'Nilai Max',
                dataIndex: 'max'

            },
            {
                header: 'Center',
                dataIndex: 'center'

            }
        ];





        this.callParent(arguments);
    }
});
