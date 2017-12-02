/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.geologis', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.geologi',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/geologi.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

