/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.proses', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.MenuProses',
    initComponent: function () {
        this.items = [
            {
                text: 'Buffering',
                handler: function () {



                }

            },
            {
                text: 'Modeling',
                handler: function () {




                }

            },
            {
                text: 'Hasil Analisa',
                handler: function () {


                }

            }
        ]
        ;
        this.callParent(arguments);
    }
});
