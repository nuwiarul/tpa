/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.kemiringans', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.kemiringan',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/kemiringan.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

