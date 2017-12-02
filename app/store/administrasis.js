/**
 * The store used for summits
 */
Ext.define('TPA.store.administrasis', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.administrasi',
    autoLoad: false
});
