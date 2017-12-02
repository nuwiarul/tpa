/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.jenis_tanahs', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.jenis_tanah',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/jenis_tanah.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

