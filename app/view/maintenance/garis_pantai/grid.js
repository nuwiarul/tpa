/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('TPA.view.maintenance.garis_pantai.grid', {
    extend: 'Ext.grid.Panel',
    flex: 1,
    store: 'maintenance.garis_pantais',

    initComponent: function () {

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




        this.selModel = selModel;


        this.columns = [


            {
                header: 'Fuzzy',
                dataIndex: 'fuzzy'

            },
            {
                header: 'Nilai Minimal',
                dataIndex: 'min'

            },
            {
                header: 'Nilai Maximal',
                dataIndex: 'max'

            },
            {
                header: 'Nilai Center',
                dataIndex: 'center'

            }
        ];

        this.tbar = [
            {
                itemId: 'add',
                text: 'Tambah',
                iconCls: 'add',
                action: 'add'
            },
            {
                itemId: 'edit',
                text: 'Edit',
                iconCls: 'edit',
                action: 'edit',
                disabled: true
            },
            {
                itemId: 'delete',
                text: 'Hapus',
                iconCls: 'delete',
                action: 'delete',
                disabled: true
            }
        ];





        this.callParent(arguments);
    }
});
