/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.geologis', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.geologi',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/geologi.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

