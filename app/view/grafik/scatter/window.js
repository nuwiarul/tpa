/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.scatter.window', {
    extend: 'Ext.window.Window',
    id: 'TPA.view.grafik.scatter.window',
    alias: 'widget.Grafik_ScatterWindow',
    title: 'Grafik Scatter',

    layout: {
        type: 'fit',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true
    },
    width: 600,
    height: 400,
    nilai : 55,
    initComponent: function () {

        /*
        var data = [
            {
                point1: 0,
                point2: 0,
                point3: 0,
                point4: 40
            },
            {
                point1: 1,
                point2: 0,
                point3: 1,
                point4: 60
            },
            {
                point1: 0,
                point2: 60,
                point3: 0,
                point4: 100
            }
        ];

        var store = Ext.create('Ext.data.JsonStore', {
            fields: ['point1', 'point2', 'point3', 'point4'],
            data: data
        });

        var scatter = {
            series: [
                {
                    type: 'scatter',
                    name: 'Dekat',
                    lineWidth: 1,
                    xField: 'point2',
                    yField: 'point1'
                },
                {
                    type: 'scatter',
                    lineWidth: 1,
                    xField: 'point4',
                    yField: 'point3'
                }
            ],
            store: store,
            chartConfig: {
                chart: {
                    marginRight: 130,
                    marginBottom: 120,
                    zoomType: 'x'
                },
                title: {
                    text: 'Highcharts (' + Highcharts.version + ') Example For ExtJs ' + Ext.versions.core.version,
                    x: -20 //center
                },
                subtitle: {
                    text: 'Scatter Values',
                    x: -20
                },

                xAxis: {
                    title: {
                        text: 'Temperature'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -10,
                    y: 100,
                    borderWidth: 0
                },
                credits: {
                    text: 'joekuan.wordpress.com',
                    href: 'http://joekuan.wordpress.com',
                    style: {
                        cursor: 'pointer',
                        color: '#707070',
                        fontSize: '12px'
                    }
                }
            }
        };


        //var grafik = Ext.create('TPA.view.grafik.scatter.chart');

        //grafik.bindStore(store, true);

        var grafik = Ext.widget('highchart', scatter);

        this.items = [grafik];

        */

        this.callParent(arguments);


    }
});
