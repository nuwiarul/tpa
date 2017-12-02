/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.setting', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.MenuSetting',
    initComponent: function () {
        this.items = [
            {
                text: 'Ganti Password',
                scale: 'large',
                iconCls: 'logout',
                iconAlign: 'top',
                cls: 'x-btn-as-arrow',
                handler: function () {
                    var win = Ext.create('TPA.view.setting.ganti_password.window');
                    win.show()
                }
            }
        ]
        ;
        this.callParent(arguments);
    }
});
