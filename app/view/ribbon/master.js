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

Ext.define('Adit.view.ribbon.master', {
    extend: 'Ext.panel.Panel',
    title: 'Master',
    initComponent: function () {
        this.tbar = [
            {
                xtype: 'buttongroup',
                columns: 2,
                height: 90,
                title: 'Person',
                items: [
                    {
                        text: 'User',
                        iconCls: 'user',
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

                    },
                    {
                        text: 'Jabatan',
                        iconCls: 'jabatan',
                        handler: function () {
                            var main = Ext.getCmp('CenterTab');
                            var sc = main.getChildByElement('Adit.view.master.jabatan.panel');
                            if (sc) {
                                main.setActiveTab(sc);
                            }
                            else {
                                var tab = Ext.create('Adit.view.master.jabatan.panel');
                                main.add(tab).show();
                            }

                        }

                    },
                    {
                        text: 'Karyawan',
                        iconCls: 'karyawan',
                        handler: function () {
                            var main = Ext.getCmp('CenterTab');
                            var sc = main.getChildByElement('Adit.view.master.karyawan.panel');
                            if (sc) {
                                main.setActiveTab(sc);
                            }
                            else {
                                var tab = Ext.create('Adit.view.master.karyawan.panel');
                                main.add(tab).show();
                            }

                        }
                    }
                ]
            },
            {
                xtype: 'buttongroup',
                columns: 2,
                height: 90,
                title: 'Register',
                items: [
                    {
                        text: 'Data Kapal',
                        iconCls: 'tipe_kamar',
                        handler: function () {
                            var main = Ext.getCmp('CenterTab');
                            var sc = main.getChildByElement('Adit.view.master.kapal.panel');
                            if (sc) {
                                main.setActiveTab(sc);
                            }
                            else {
                                var tab = Ext.create('Adit.view.master.kapal.panel');
                                main.add(tab).show();
                            }

                        }

                    },
                    {
                        text: 'Register Kapal',
                        iconCls: 'fasilitas_kamar',
                        handler: function () {
                            var main = Ext.getCmp('CenterTab');
                            var sc = main.getChildByElement('Hotel.view.master.jabatan.Panel');
                            if (sc) {
                                main.setActiveTab(sc);
                            }
                            else {
                                var tab = Ext.create('Hotel.view.master.jabatan.Panel');
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
