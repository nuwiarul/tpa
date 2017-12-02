/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.hidrologis', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.hidrologi',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/hidrologi.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

