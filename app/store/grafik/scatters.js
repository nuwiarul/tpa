/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.grafik.scatters', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.grafik.scatter',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/grafik/scatter.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

