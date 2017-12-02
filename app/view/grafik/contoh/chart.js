/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('TPA.view.grafik.contoh.chart', {
    extend: 'Ext.chart.Chart',
    flex: 1,
    initComponent: function () {



        var data = [{
            name : 0,
            data : 1,
            name1 : 0,
            data1 : 0
        },{
            name : 20,
            data : 0,
            name1 : 20,
            data1 : 0
        },{
            name : 40,
            data : 0,
            data1 : 0,
            name1 : null
        },{
            name : 50,
            data : 0,
            data1 : 1,
            name1 : null
        },{
            name : 60,
            data : 0,
            data1 : 0,
            name1 : null
        }];

        var store = Ext.create('Ext.data.JsonStore', {
            fields: ['name', 'data','data1','name1'],
            data: data
        });

        this.store = store;


        this.axes = [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['data','data1'],
                title: 'U',
                grid: false
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Nilai Hidrologi'
            }
        ];

        this.series = [
            {
                type: 'line',
                highlight: {
                    size: 1,
                    radius: 1
                },
                axis: 'left',
                xField: 'name1',
                yField: 'data',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            }
        ]


        this.callParent(arguments);
    }
});
