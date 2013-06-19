/*
 * File: app/view/ui/newservice.js
 * Date: Tue Jun 18 2013 16:52:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.newservice', {
    extend: 'Ext.form.Panel',

    border: 0,
    bodyPadding: 10,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Sensor Observation Service',
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'nsservice',
                            invalidText: 'The serivice name must be a single lower case word',
                            name: 'service',
                            fieldLabel: 'Service name',
                            allowBlank: false,
                            regex: /^[a-z]+$/,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'epsg',
                            fieldLabel: 'EPSG',
                            emptyText: 'if empty, the default EPSG will be used',
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: 10
                },
                {
                    xtype: 'displayfield',
                    hidden: true,
                    id: 'messageField',
                    fieldStyle: 'color: red;',
                    name: 'message',
                    fieldLabel: 'Message',
                    labelStyle: 'color: red;',
                    anchor: '100%'
                },
                {
                    xtype: 'fieldset',
                    id: 'fscustomdb',
                    checkboxName: 'customdb',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: 'Customize database',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'user',
                            fieldLabel: 'User',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'password',
                            fieldLabel: 'Password',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'host',
                            fieldLabel: 'Host',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'port',
                            fieldLabel: 'Port',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'dbname',
                            fieldLabel: 'DB name',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'toolbar',
                                    margin: '0 0 5 0',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'end',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'btnTestConnection',
                                            text: 'Test connection'
                                        }
                                    ]
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