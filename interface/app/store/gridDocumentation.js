/*
 * File: app/store/gridDocumentation.js
 * Date: Tue Jun 18 2013 16:52:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.gridDocumentation', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'griddocumentation',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'description',
                    type: 'string'
                },
                {
                    dateFormat: 'Y-m-d',
                    name: 'date',
                    type: 'date'
                },
                {
                    name: 'format',
                    type: 'string'
                },
                {
                    name: 'link',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});