/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.help.tentang.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.help.tentang.window',
    alias : 'widget.Help_TentangProgramWindow',
    title : 'Tentang Program',
    html : "<center>Di Buat Oleh : NI KADEK ARIASIH</center>",
    layout : {
        type : 'fit',
        pack : 'start',
        align : 'stretch'
    },
    defaults : {
        frame : true
    },
    width : 500,
    height : 300,
    initComponent: function() {

        this.bbar = [

            '->',
            {

                text: 'Tutup',
                iconCls: 'close',
                scope : this,
                handler : function() {
                    this.close()
                }

            }

        ];

        this.callParent(arguments);


    }
});
