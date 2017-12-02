/**
 * Created with JetBrains WebStorm.
 * User: arul
 * Date: 8/28/13
 * Time: 8:34 PM
 * To change this template use File | Settings | File Templates.
 */
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Adit.view.ribbon.transaksi', {
    extend: 'Ext.panel.Panel',
    title: 'Transaksi',
    initComponent: function () {
        this.tbar = [
            {
                xtype: 'buttongroup',
                columns: 2,
                height: 90,
                title: 'Register',
                items: [
                    {
                        text: 'Isi Register Kapal',
                        iconCls: 'tipe_kamar',
                        handler: function () {
                            var main = Ext.getCmp('CenterTab');
                            var sc = main.getChildByElement('Hotel.view.master.user.Panel');
                            if (sc) {
                                main.setActiveTab(sc);
                            }
                            else {
                                var tab = Ext.create('Hotel.view.master.user.Panel');
                                main.add(tab).show();
                            }

                        }

                    }
                ]
            }

        ];
        this.callParent(arguments);
    }
});
