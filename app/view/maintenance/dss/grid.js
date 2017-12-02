/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('TPA.view.maintenance.dss.grid', {
    extend: 'Ext.grid.Panel',
    flex: 1,
    store: 'maintenance.dsss',

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
                header: 'Geologi',
                dataIndex: 'geologi'

            },
            {
                header: 'Geologi Index',
                dataIndex: 'geologi_index'

            },
            {
                header: 'Hidrologi',
                dataIndex: 'hidrologi'

            },
            {
                header: 'Hidrologi Index',
                dataIndex: 'hidrologi_index'

            },
            {
                header: 'Garis Pantai',
                dataIndex: 'garis_pantai'

            },
            {
                header: 'Garis Pantai Index',
                dataIndex: 'garis_pantai_index'

            },
            {
                header: 'Sungai Besar',
                dataIndex: 'sungai_besar'

            },
            {
                header: 'Sungai Besar Index',
                dataIndex: 'sungai_besar_index'

            },
            {
                header: 'Land Use',
                dataIndex: 'land_use'

            },
            {
                header: 'Land Use Index',
                dataIndex: 'land_use_index'

            },
            {
                header: 'Jenis Tanah',
                dataIndex: 'jenis_tanah'

            },
            {
                header: 'Jenis Tanah Index',
                dataIndex: 'jenis_tanah_index'

            },{
                header: 'Rawan Bencana',
                dataIndex: 'rawan_bencana'

            },
            {
                header: 'Rawan Bencana Index',
                dataIndex: 'rawan_bencana_index'

            },
            {
                header: 'Kemiringan',
                dataIndex: 'kemiringan'

            },
            {
                header: 'Kemiringan Index',
                dataIndex: 'kemiringan_index'

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
