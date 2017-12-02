/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.land_uses', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.land_use',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/land_use.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

