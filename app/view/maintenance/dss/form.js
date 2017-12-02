/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.dss.form' ,{
    extend: 'Ext.form.Panel',
    bodyPadding: 5,
    frame : true,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 90,
        msgTarget: 'qtip'
    },
    initComponent: function() {

        this.items = [{
            xtype     : 'combobox',
            name      : 'geologi_index',
            fieldLabel: 'Geologi',
            store : 'maintenance.geologis',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Geologi'
        },{
            xtype     : 'combobox',
            name      : 'hidrologi_index',
            fieldLabel: 'Hidrologi',
            store : 'maintenance.hidrologis',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Hidrologi'
        },{
            xtype     : 'combobox',
            name      : 'garis_pantai_index',
            fieldLabel: 'Garis Pantai',
            store : 'maintenance.garis_pantais',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Garis Pantai'
        },{
            xtype     : 'combobox',
            name      : 'sungai_besar_index',
            fieldLabel: 'Sungai Besar',
            store : 'maintenance.sungai_besars',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Sungai Besar'
        },{
            xtype     : 'combobox',
            name      : 'land_use_index',
            fieldLabel: 'Land Use',
            store : 'maintenance.land_uses',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Land Use'
        },{
            xtype     : 'combobox',
            name      : 'jenis_tanah_index',
            fieldLabel: 'Jenis Tanah',
            store : 'maintenance.jenis_tanahs',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Jenis Tanah'
        },{
            xtype     : 'combobox',
            name      : 'rawan_bencana_index',
            fieldLabel: 'Rawan Bencana',
            store : 'maintenance.rawan_bencanas',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Rawan Bencana'
        },{
            xtype     : 'combobox',
            name      : 'kemiringan_index',
            fieldLabel: 'Kemiringan',
            store : 'maintenance.kemiringans',
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Kemiringan'
        },{
            xtype     : 'combobox',
            name      : 'fuzzy',
            fieldLabel: 'Fuzzy',
            store : Ext.create('Ext.data.Store', {
                fields: ['id', 'fuzzy'],
                data: [{
                    id : 'Layak',
                    fuzzy : 'Layak'
                },{
                    id : 'Cukup Layak',
                    fuzzy : 'Cukup Layak'
                },{
                    id : 'Tidak Layak',
                    fuzzy : 'Tidak Layak'
                }]
            }),
            width    : 250,
            allowBlank: false,
            displayField: 'fuzzy',
            valueField: 'id',
            emptyText: 'Fuzzy'
        },{
            xtype     : 'hiddenfield',
            name      : 'id'
        }];

        this.buttons = [{
            text: 'Simpan',
            iconCls : 'save',
            formBind : true,
            disabled : true,
            action : 'save'

        },{
            text: 'Close',
            iconCls : 'close',
            scope : this,
            action : 'close'

        }];


        this.callParent(arguments);
    }
});