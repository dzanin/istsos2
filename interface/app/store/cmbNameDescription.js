/*
 * File: app/store/cmbNameDescription.js
 * Date: Tue Jun 18 2013 16:52:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.cmbNameDescription', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'namedescription',
            proxy: {
                type: 'ajax',
                url: 'app/data/cmbsystemtype.json',
                reader: {
                    type: 'json',
                    idProperty: 'definition',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'description',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});