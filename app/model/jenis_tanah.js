/**
 * Model for a summit
 */
Ext.define('TPA.model.jenis_tanah', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'gid', type: 'int'},
        {name: 'tanah', type: 'string'},
        {name: 'nilai', type: 'float'}

    ]
});
