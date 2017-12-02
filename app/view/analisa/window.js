/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.analisa.window', {
    extend: 'Ext.window.Window',
    id: 'TPA.view.analisa.window',
    alias: 'widget.Analisa_Window',
    title: 'Hasil Analisa',

    layout: {
        type: 'fit',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true
    },
    width: 600,
    height: 400,
    result: null,
    initComponent: function () {


        var form = Ext.create('TPA.view.analisa.form');
        form.getForm().setValues({
            geologi : this.result.geologi.nilai,
            hidrologi : this.result.hidrologi.nilai,
            garis_pantai : this.result.garis_pantai.nilai + " km",
            sungai : this.result.sungai_besar.nilai + " km",
            land_use : this.result.land_use.nilai,
            jenis_tanah : this.result.jenis_tanah.nilai,
            rawan_bencana : this.result.rawan_bencana.nilai,
            kemiringan : this.result.kemiringan.nilai,
            kecamatan : this.result.kecamatan,
            hasil : this.result.dss + ";" + this.result.udss,
            desa : this.result.desa
        });
        this.items = [form];

        this.callParent(arguments);


    }
});
