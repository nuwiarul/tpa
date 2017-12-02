/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.garis_pantais', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.garis_pantai',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/garis_pantai.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

