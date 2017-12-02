/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.maintenance', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.MenuProses',
    initComponent: function () {
        this.items = [
            {
                text: 'Geologi Fuzzy',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.maintenance.geologi.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },
            {
                text: 'Hidrologi Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.hidrologi.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },
            {
                text: 'Sungai Besar Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.sungai_besar.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },
            {
                text: 'Garis Pantai Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.garis_pantai.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },{
                text: 'Land Use Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.land_use.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },{
                text: 'Jenis Tanah Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.jenis_tanah.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },{
                text: 'Rawan Bencana Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.rawan_bencana.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },{
                text: 'Kemiringan Fuzzy',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.kemiringan.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            },
            {
                text: 'Fuzzy Rule',
                scope : this,
                handler: function () {


                    var win = Ext.create('TPA.view.maintenance.dss.window',{
                        animateTarget: this
                    });
                    win.show()

                }

            }
        ]
        ;
        this.callParent(arguments);
    }
});
