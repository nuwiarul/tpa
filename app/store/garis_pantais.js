/**
 * The store used for summits
 */
Ext.define('TPA.store.garis_pantais', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.garis_pantai',
    autoLoad: false
});
