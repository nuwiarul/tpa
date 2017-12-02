/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.analisa.form' ,{
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
            xtype     : 'displayfield',
            name      : 'kecamatan',
            fieldLabel: 'Kecamatan',
            anchor    : '100%',
            allowBlank: false
        },{
            xtype     : 'displayfield',
            name      : 'desa',
            fieldLabel: 'Desa',
            anchor    : '100%',
            allowBlank: false
        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Geologi',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'geologi',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_geologi',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_geologi'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Hidrologi',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'hidrologi',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_hidrologi',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_hidrologi'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Jarak Garis Pantai',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'garis_pantai',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_garis_pantai',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_garis_pantai'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Jarak Sungai',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'sungai',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_sungai',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_sungai'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Land Use',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'land_use',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_land_use',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_land_use'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Jenis Tanah',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'jenis_tanah',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_jenis_tanah',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_jenis_tanah'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Rawan Bencana',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'rawan_bencana',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_rawan_bencana',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_rawan_bencana'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Kemiringan',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'kemiringan',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 65,
                text : 'Hitung',
                iconCls: 'hitung',
                action: 'hitung_kemiringan',
                margins : '0 5 0 0'
            },{
                xtype: 'button',
                width : 65,
                text : 'Grafik',
                iconCls: 'chart',
                action: 'chart_kemiringan'
            }]

        },{
            xtype: 'fieldcontainer',
            fieldLabel: 'Hasil Analisa',
            layout: 'hbox',
            items : [{
                xtype: 'displayfield',
                flex : 1,
                name : 'hasil',
                disabled : true,
                allowBlank: false
            },{
                xtype: 'button',
                width : 130,
                text : 'Proses Inference',
                iconCls: 'hitung',
                action: 'proses',
                margins : '0 5 0 0'
            }]

        }];

        this.buttons = [{
            text: 'Close',
            iconCls : 'close',
            scope : this,
            handler : function() {
                var win = this.up('window');
                win.animate({
                    duration: 500,
                    to: {
                        opacity: 0
                    }
                }).animate({
                        duration: 500,
                        to: {
                            opacity: 100
                        }
                 });
                win.close()
            }

        }];


        this.callParent(arguments);
    }
});