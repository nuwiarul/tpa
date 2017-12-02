/**
 * Created with JetBrains WebStorm.
 * User: arul
 * Date: 8/28/13
 * Time: 8:08 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Adit.view.ribbon.file' ,{
    extend: 'Ext.panel.Panel',
    title : 'File',
    initComponent: function() {
        this.tbar = [
            {
                xtype: 'buttongroup',
                columns: 1,
                height : 90,
                items:[{
                    text: 'Logout',
                    scale: 'large',
                    iconCls: 'logout',
                    iconAlign: 'top',
                    cls: 'x-btn-as-arrow',
                    handler : function() {
                        window.location = 'logout.php';
                    }
                }]
            }];
        this.callParent(arguments);
    }
});
