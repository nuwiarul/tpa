/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.kemiringans', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.kemiringan',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/kemiringan.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

