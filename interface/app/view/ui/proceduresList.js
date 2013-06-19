/*
 * File: app/view/ui/proceduresList.js
 * Date: Tue Jun 18 2013 16:52:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.proceduresList', {
    extend: 'Ext.grid.Panel',

    height: 400,
    autoScroll: true,
    forceFit: true,
    store: 'procedurelist',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            id: 'btnRemove',
                            text: 'Delete selected'
                        }
                    ]
                }
            ],
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'offerings',
                    text: 'Offerings'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'observedproperties',
                    text: 'Observedproperties'
                }
            ]
        });

        me.callParent(arguments);
    }
});