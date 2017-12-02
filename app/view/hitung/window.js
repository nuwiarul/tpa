/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.hitung.window', {
    extend: 'Ext.window.Window',
    id: 'TPA.view.hitung.window',
    alias: 'widget.Hitung_Window',
    title: 'Perhitungan Nilai Fuzzy',
    animateTarget : {

    },
    layout: {
        type: 'fit',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true
    },
    width: 400,
    height: 300,
    result: null,
    records : null,
    nilai : 0,
    initComponent: function () {

        var html = "";

        for (i =0 ; i < this.records.length;i++) {
            var nilai = parseFloat(this.nilai);
            var min = parseFloat(this.records[i].data.min);
            var max = parseFloat(this.records[i].data.max);
            if (nilai > min && nilai < max) {
                var hasil = (max - nilai) / (max - min);
                html += "- " + this.records[i].data.fuzzy + " ( " + nilai + " ) = " + "( " + max + " - " + nilai + " ) " +
                    " / " + "( " + max + " - " + min + " ) = " + hasil + "<br>";
            }
        }

        this.html = html;


        this.buttons = [{
            text: 'Close',
            iconCls : 'close',
            scope : this,
            handler : function() {
                this.close()
            }

        }];
        this.callParent(arguments);


    }
});
