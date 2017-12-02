/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.dsss', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.dss',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/dss.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

