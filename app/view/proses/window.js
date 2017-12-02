/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.proses.window', {
    extend: 'Ext.window.Window',
    id: 'TPA.view.proses.window',
    alias: 'widget.Proses_Window',
    title: 'Proses Inference',
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
    autoScroll : true,
    width: 600,
    height: 500,
    result: null,
    initComponent: function () {

        var inferensi = this.result.inferensi;

        var geologi = this.result.geologi.nilai;
        var hidrologi = this.result.hidrologi.nilai;
        var garis_pantai = this.result.garis_pantai.nilai;
        var sungai_besar = this.result.sungai_besar.nilai;
        var land_use = this.result.land_use.nilai;
        var jenis_tanah = this.result.jenis_tanah.nilai;
        var rawan_bencana = this.result.rawan_bencana.nilai;
        var kemiringan = this.result.kemiringan.nilai;
        var udss = this.result.udss;
        var dss = this.result.dss;

        var html = "";

        var hasil = " max ( ";

        for (var i = 0 ; i < inferensi.length; i++) {
            html += "Kombinasi rule " + (i + 1 ) + "<br><br>";
            html += "Geologi : " + inferensi[i].geologi_fz + " ( " + geologi + " ) = " + inferensi[i].geologi_nilai + "<br>";
            html += "Hidrologi : " + inferensi[i].hidrologi_fz + " ( " + garis_pantai + " ) = " + inferensi[i].hidrologi_nilai + "<br>";
            html += "Garis Pantai : " + inferensi[i].garis_pantai_fz + " ( " + garis_pantai + " ) = " + inferensi[i].garis_pantai_nilai + "<br>";
            html += "Sungai  : " + inferensi[i].sungai_besar_fz + " ( " + sungai_besar + " ) = " + inferensi[i].sungai_besar_nilai + "<br>";
            html += "Land use : " + inferensi[i].land_use_fz + " ( " + land_use + " ) = " + inferensi[i].land_use_nilai + "<br>";
            html += "Jenis tanah : " + inferensi[i].jenis_tanah_fz + " ( " + jenis_tanah + " ) = " + inferensi[i].jenis_tanah_nilai + "<br>";
            html += "Rawan bencana : " + inferensi[i].rawan_bencana_fz + " ( " + rawan_bencana + " ) = " + inferensi[i].rawan_bencana_nilai + "<br>";
            html += "Kemiringan : " + inferensi[i].kemiringan_fz + " ( " + kemiringan + " ) = " + inferensi[i].kemiringan_nilai + "<br>";
            html += "<br>";
            html += "Nilai minimal : min ( " + inferensi[i].geologi_nilai + " , " + inferensi[i].hidrologi_nilai + " , " + inferensi[i].garis_pantai_nilai +
                    " , " + inferensi[i].sungai_besar_nilai + " , " + inferensi[i].land_use_nilai + " , " + inferensi[i].jenis_tanah_nilai +
                    " , " + inferensi[i].rawan_bencana_nilai + " , " + inferensi[i].kemiringan_nilai + " ) <br>";
            html += " = " + inferensi[i].udss + "<br>";
            html += " DSS :  " + inferensi[i].dss + "<br><br>";
            hasil += inferensi[i].udss
            if (i != (inferensi.length - 1)) {
                hasil += " , ";
            }

        }

        hasil += " ) ";

        html += "Hasil akhir : <br><br>";
        html += "Nilai maksimal dss : " + hasil + "<br>";
        html += "= " + udss + "<br>";
        html += "DSS = " + dss + "<br>";


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
