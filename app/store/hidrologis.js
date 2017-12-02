/**
 * The store used for summits
 */
Ext.define('TPA.store.hidrologis', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.hidrologi',
    autoLoad: false
});
