/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.sungai_besars', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.sungai_besar',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/sungai_besar.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

