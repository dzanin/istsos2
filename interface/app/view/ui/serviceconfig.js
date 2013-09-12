/*
 * File: app/view/ui/serviceconfig.js
 * Date: Thu Sep 12 2013 18:01:21 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.serviceconfig', {
    extend: 'Ext.form.Panel',

    border: 0,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    html: '<h3>Service Provider:</h3>Here you can personalize the service provider information. It will be displayed in the getCapabilities document.',
                    padding: '10 0 10 0'
                },
                {
                    xtype: 'fieldset',
                    id: 'provider',
                    padding: 10,
                    checkboxName: 'cbprovider',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: 'check to apply customizations',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'providername',
                            fieldLabel: 'Name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'providersite',
                            fieldLabel: 'Web site',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactname',
                            fieldLabel: 'Contact name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactposition',
                            fieldLabel: 'Contact position',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactvoice',
                            fieldLabel: 'Voice',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactfax',
                            fieldLabel: 'Fax',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactemail',
                            fieldLabel: 'Email',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactdeliverypoint',
                            fieldLabel: 'Address',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactpostalcode',
                            fieldLabel: 'Postal code',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactcity',
                            fieldLabel: 'City',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactadminarea',
                            fieldLabel: 'State',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'contactcountry',
                            fieldLabel: 'Country',
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    html: '<h3>Service Identification:</h3>Here you can personalize..',
                    padding: '10 0 10 0'
                },
                {
                    xtype: 'fieldset',
                    id: 'identification',
                    padding: 10,
                    checkboxName: 'cbidentification',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: 'check to apply customizations',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'title',
                            fieldLabel: 'Title',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'abstract',
                            fieldLabel: 'Abstract',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'keywords',
                            fieldLabel: 'Keywords',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'fees',
                            fieldLabel: 'Fees',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'accessconstrains',
                            fieldLabel: 'Access constrains',
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    html: '<h3>Coordinate system:</h3>Here you can personalize..',
                    padding: '10 0 10 0'
                },
                {
                    xtype: 'fieldset',
                    id: 'geo',
                    padding: 10,
                    checkboxName: 'cbcoordinates',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: 'check to apply customizations',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'istsosepsg',
                            fieldLabel: 'Default EPSG',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'allowedepsg',
                            fieldLabel: 'Permitted EPSG',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'xaxisname',
                            fieldLabel: 'X axis name',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'yaxisname',
                            fieldLabel: 'Y axis name',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'zaxisname',
                            fieldLabel: 'Z axis name',
                            allowBlank: false,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    html: '<h3>GetObservation configuration:</h3>Here you can personalize..',
                    padding: '10 0 10 0'
                },
                {
                    xtype: 'fieldset',
                    id: 'getobservation',
                    padding: 10,
                    checkboxName: 'cbgetobservation',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: 'check to apply customizations',
                    items: [
                        {
                            xtype: 'numberfield',
                            name: 'maxgoperiod',
                            fieldLabel: 'Max request interval (hours)',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'numberfield',
                            name: 'defaultqi',
                            fieldLabel: 'Default quality index',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'numberfield',
                            name: 'aggregatenodataqi',
                            fieldLabel: 'Aggregation no-data quality index',
                            allowBlank: false,
                            anchor: '100%'
                        },
                        {
                            xtype: 'numberfield',
                            name: 'aggregatenodata',
                            fieldLabel: 'Aggregation no-data value',
                            allowBlank: false,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    html: '<h3>Proxy URL:</h3>Here you can personalize..',
                    padding: '10 0 10 0'
                },
                {
                    xtype: 'fieldset',
                    id: 'proxyurl',
                    padding: 10,
                    checkboxName: 'cbgetobservation',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: 'check to apply customizations',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'url',
                            fieldLabel: 'Url',
                            allowBlank: false,
                            anchor: '100%'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});