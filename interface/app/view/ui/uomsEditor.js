/*
 * File: app/view/ui/uomsEditor.js
 * Date: Tue Jun 18 2013 16:52:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.uomsEditor', {
    extend: 'Ext.panel.Panel',

    border: 0,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'gridop',
                    margin: 8,
                    maxHeight: 250,
                    title: '',
                    forceFit: true,
                    store: 'griduoms',
                    viewConfig: {

                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnNew',
                                    text: 'New'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'btnRemove',
                                    text: 'Remove selected'
                                }
                            ]
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'description',
                            text: 'Description'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'procedures',
                            text: 'Procedures'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    border: 0,
                    hidden: true,
                    id: 'frmUoms',
                    bodyPadding: 10,
                    title: '',
                    trackResetOnLoad: true,
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Observed property',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'opName',
                                    name: 'name',
                                    fieldLabel: 'Code',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'description',
                                    fieldLabel: 'Description',
                                    anchor: '100%'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            ui: 'footer',
                            dock: 'bottom',
                            layout: {
                                pack: 'center',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnForm',
                                    text: 'Insert'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});