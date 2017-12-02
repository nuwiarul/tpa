/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.maintenance.rawan_bencana.form' ,{
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
            xtype     : 'textfield',
            name      : 'fuzzy',
            fieldLabel: 'Fuzzy',
            anchor    : '100%',
            allowBlank: false
        },{
            xtype     : 'numberfield',
            name      : 'min',
            fieldLabel: 'Nilai Minimal',
            anchor    : '100%',
            allowBlank: false
        },{
            xtype     : 'numberfield',
            name      : 'max',
            fieldLabel: 'Nilai Maximal',
            anchor    : '100%',
            allowBlank: false
        },{
            xtype     : 'numberfield',
            name      : 'center',
            fieldLabel: 'Nilai Center',
            anchor    : '100%',
            allowBlank: false
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