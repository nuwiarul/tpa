/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.hidrologis', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.hidrologi',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/hidrologi.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

