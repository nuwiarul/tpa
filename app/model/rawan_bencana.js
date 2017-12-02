/**
 * Model for a summit
 */
Ext.define('TPA.model.rawan_bencana', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'gid', type: 'int'},
        {name: 'keterangan', type: 'string'},
        {name: 'nilai', type: 'float'}

    ]
});
