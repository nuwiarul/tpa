/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.menu.layer', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.MenuLayer',
    initComponent: function () {
        this.items = [
            {
                text: 'Geologi',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.layer.geologi.window',{
                        animateTarget: this
                    });
                    win.show()


                }

            },{
                text: 'Hidrologi',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.layer.hidrologi.window',{
                        animateTarget: this
                    });
                    win.show()


                }

            },{
                text: 'Land Use',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.layer.land_use.window',{
                        animateTarget: this
                    });
                    win.show()


                }

            },{
                text: 'Rawan Bencana',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.layer.rawan_bencana.window',{
                        animateTarget: this
                    });
                    win.show()


                }

            },{
                text: 'Kemiringan',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.layer.kemiringan.window',{
                        animateTarget: this
                    });
                    win.show()


                }

            },{
                text: 'Jenis Tanah',
                scope : this,
                handler: function () {

                    var win = Ext.create('TPA.view.layer.jenis_tanah.window',{
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
