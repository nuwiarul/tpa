/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.layer.rawan_bencana.form' ,{
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
            xtype     : 'numberfield',
            name      : 'nilai',
            fieldLabel: 'Nilai',
            anchor    : '100%',
            allowBlank: false
        },{
            xtype     : 'hiddenfield',
            name      : 'gid'
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
            action : 'close',
            handler : function() {
                this.up('window').close()
            }

        }];


        this.callParent(arguments);
    }
});