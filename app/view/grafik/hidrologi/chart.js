/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define('TPA.view.grafik.hidrologi.chart', {
    extend: 'Ext.chart.Chart',
    flex: 1,
    store : 'grafik.hidrologis',
    initComponent: function () {

        /*

        var data = [{
            name : 0,
            data : 1,
            name1 : 4000,
            data1 : 0
        },{
            name : 2000,
            data : 1,
            name1 : 5000,
            data1 : 0
        },{
            name : 4000,
            data : 0,
            name1 : 6000,
            data1 : 0
        },{
            name : 5000,
            data : 0,
            name1 : 6000,
            data1 : 1
        },{
            name : 6000,
            data : 0,
            name1 : 6000,
            data1 : 0
        }];

        var store = Ext.create('Ext.data.JsonStore', {
            fields: ['name', 'data','data1'],
            data: data
        });

        this.store = store;
        */

        this.axes = [
            {
                type: 'Numeric',
                position: 'left',
                fields: ['data0','data1','data2'],
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
                xField: 'name',
                yField: 'hasil',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 1,
                    radius: 1
                },
                axis: 'left',
                xField: 'name',
                yField: 'data0',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data1',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data2',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data3',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data4',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data5',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data6',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data7',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data8',
                markerConfig: {
                    type: 'circle',
                    size: 0,
                    radius: 0,
                    'stroke-width': 0
                }
            },
            {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data9',
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
