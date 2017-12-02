/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.help', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.MenuHelp',
    initComponent: function () {
        this.items = [
            {
                text: 'Bantuan',
                handler: function () {



                }

            },
            {
                text: 'Tentang Program',
                handler: function () {

                    var window = Ext.create('TPA.view.help.tentang.window');
                    window.show();


                }

            }
        ]
        ;
        this.callParent(arguments);
    }
});
