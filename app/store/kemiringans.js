/**
 * The store used for summits
 */
Ext.define('TPA.store.kemiringans', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.kemiringan',
    autoLoad: false
});
