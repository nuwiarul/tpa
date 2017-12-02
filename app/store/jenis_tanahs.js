/**
 * The store used for summits
 */
Ext.define('TPA.store.jenis_tanahs', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.jenis_tanah',
    autoLoad: false
});
