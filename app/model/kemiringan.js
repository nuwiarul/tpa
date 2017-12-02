/**
 * Model for a summit
 */
Ext.define('TPA.model.kemiringan', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'gid', type: 'int'},
        {name: 'kelerengan', type: 'string'},
        {name: 'nilai', type: 'float'}

    ]
});
