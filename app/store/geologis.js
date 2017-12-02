/**
 * The store used for summits
 */
Ext.define('TPA.store.geologis', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.geologi',
    autoLoad: false
});
