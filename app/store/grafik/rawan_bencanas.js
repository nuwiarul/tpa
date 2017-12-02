/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.rawan_bencanas', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.rawan_bencana',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/rawan_bencana.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

