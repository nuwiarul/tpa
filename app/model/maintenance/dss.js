/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.model.maintenance.dss', {
    extend: 'Ext.data.Model',
    fields: ['id', 'fuzzy','geologi','geologi_index','hidrologi','hidrologi_index',
        'garis_pantai','garis_pantai_index','sungai_besar','sungai_besar_index',
        'land_use','land_use_index','jenis_tanah','jenis_tanah_index',
        'rawan_bencana','rawan_bencana_index','kemiringan','kemiringan_index']
});
