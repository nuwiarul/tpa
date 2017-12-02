/**
 * Model for a summit
 */
Ext.define('TPA.model.hidrologi', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'gid', type: 'int'},
        {name: 'sub_sws', type: 'string'},
        {name: 'kandungan', type: 'string'},
        {name: 'data', type: 'string'},
        {name: 'nilai', type: 'float'}

    ]
});
