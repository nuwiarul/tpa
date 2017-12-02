/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.setting.ganti_password.form' ,{
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
            name      : 'old_password',
            fieldLabel: 'Password Lama',
            anchor    : '100%',
            inputType: 'password',
            allowBlank: false
        },{
            xtype     : 'textfield',
            name      : 'new_password',
            fieldLabel: 'Password Baru',
            anchor    : '100%',
            inputType: 'password',
            allowBlank: false
        },{
            xtype     : 'textfield',
            name      : 'confirm_password',
            fieldLabel: 'Konfirmasi Password',
            anchor    : '100%',
            inputType: 'password',
            allowBlank: false
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