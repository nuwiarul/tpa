/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.setting.ganti_password.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.setting.ganti_password.window',
    alias : 'widget.Setting_GantiPasswordWindow',
    title : 'Ganti Password',

    layout : {
        type : 'fit',
        pack : 'start',
        align : 'stretch'
    },
    defaults : {
        frame : true
    },
    width : 300,
    height : 200,
    initComponent: function() {
        

        var form = Ext.create('TPA.view.setting.ganti_password.form');
        this.items = [form];

        this.callParent(arguments);


    }
});
