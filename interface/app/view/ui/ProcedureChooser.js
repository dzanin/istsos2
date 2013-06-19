/*
 * File: app/view/ui/ProcedureChooser.js
 * Date: Tue Jun 18 2013 16:52:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.ProcedureChooser', {
    extend: 'Ext.panel.Panel',

    border: 0,
    itemId: 'chartone',
    minWidth: 280,
    padding: '10px 0px 0px 0px',
    layout: {
        type: 'border'
    },
    bodyPadding: '',
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    border: 0,
                    height: 120,
                    id: 'oeSettings',
                    bodyPadding: '0 10 0 10',
                    title: '',
                    region: 'north',
                    items: [
                        {
                            xtype: 'combobox',
                            id: 'cmbServices',
                            fieldLabel: 'Service',
                            labelWidth: 70,
                            displayField: 'service',
                            store: 'storeServices',
                            valueField: 'service',
                            anchor: '100%'
                        },
                        {
                            xtype: 'combobox',
                            disabled: true,
                            id: 'oeCbOffering',
                            name: 'offering',
                            fieldLabel: 'Offering',
                            labelWidth: 70,
                            displayField: 'name',
                            queryMode: 'local',
                            store: 'offerings',
                            valueField: 'name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'combobox',
                            disabled: true,
                            id: 'oeCbProcedure',
                            name: 'procedure',
                            fieldLabel: 'Procedure',
                            labelWidth: 70,
                            displayField: 'name',
                            queryMode: 'local',
                            store: 'procedurelist',
                            valueField: 'name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'button',
                            id: 'btnAdd',
                            text: 'Add',
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    border: 0,
                    id: 'proceduresTree',
                    autoScroll: true,
                    bodyPadding: '0 10 0 10',
                    title: '',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }
});