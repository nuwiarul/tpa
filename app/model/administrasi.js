/**
 * Model for a summit
 */
Ext.define('TPA.model.administrasi', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'gid', type: 'int'},
        {name: 'kecamatan', type: 'string'},
        {name: 'desa', type: 'string'},


    ]
});
