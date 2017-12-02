/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.edit' ,{
    extend: 'Ext.menu.Menu',
    alias : 'widget.MenuEdit',
    initComponent: function() {
        this.items = [{
            text: 'Add Feature',
            handler: function () {





            }

        },{
            text: 'Move Feature',
            handler: function () {





            }

        },{
            text: 'Delete Selected',
            handler: function () {





            }

        }];
        this.callParent(arguments);
    }
});
