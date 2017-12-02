/**
 * The store used for summits
 */
Ext.define('TPA.store.land_uses', {
    extend: 'GeoExt.data.FeatureStore',
    model: 'TPA.model.land_use',
    autoLoad: false
});
