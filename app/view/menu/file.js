/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.file', {
    extend: 'Ext.menu.Menu',
    id : 'TPA.view.menu.file',
    alias: 'widget.MenuFile',
    initComponent: function () {
        this.items = [
            {
                text: 'Keluar',
                scale: 'large',
                iconCls: 'logout',
                iconAlign: 'top',
                cls: 'x-btn-as-arrow',
                handler: function () {
                    window.location = 'php/logout.php';
                }
            },
            {
                text: 'Grafik Contoh',
                scale: 'large',
                iconCls: 'logout',
                iconAlign: 'top',
                cls: 'x-btn-as-arrow',
                handler: function () {
                    var win = Ext.create('TPA.view.grafik.contoh.window');
                    win.show()
                }
            },
            {
                text: 'Grafik Scatter',
                scale: 'large',
                iconCls: 'logout',
                iconAlign: 'top',
                cls: 'x-btn-as-arrow',
                handler: function () {
                    var win = Ext.create('TPA.view.grafik.scatter.window');
                    win.show()
                }
            }
        ]
        ;
        this.callParent(arguments);
    }
});
