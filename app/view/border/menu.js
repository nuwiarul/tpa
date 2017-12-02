/**
 * Created by arul on 3/4/14.
 */
Ext.define('TPA.view.border.menu', {
    extend: 'Ext.panel.Panel',
    initComponent: function () {
        var file = Ext.create('TPA.view.menu.file');
        var edit = Ext.create('TPA.view.menu.edit');
        var layer = Ext.create('TPA.view.menu.layer');
        var maintenance = Ext.create('TPA.view.menu.maintenance');
        var setting = Ext.create('TPA.view.menu.setting');
        var help = Ext.create('TPA.view.menu.help');



        this.tbar=[{
            text : 'File',
            menu : file
        },{
            text : 'Layer',
            menu : layer
        },{
            text : 'Maintenance Data',
            menu : maintenance
        },{
            text : 'Setting',
            menu : setting
        },{
            text : 'Help',
            menu : help
        }];
        this.callParent(arguments);
    }
});