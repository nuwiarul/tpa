/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('TPA.store.maintenance.sungai_besars', {
    extend: 'Ext.data.Store',
    model : 'TPA.model.maintenance.sungai_besar',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/maintenance/sungai_besar.php',
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});

