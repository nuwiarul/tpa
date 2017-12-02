/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('TPA.view.grafik.scatter.chart', {
    extend: 'Chart.ux.Highcharts',
    flex: 1,
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
        xAxis: [
            {
                labels: {
                    rotation: 270,
                    y: 35
                }
            }
        ],
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
    },
    series: [
        {
            type: 'scatter',
            lineWidth: 1,
            xField: 'point1',
            yField: 'point2'
        }
    ],
    initComponent: function () {







        this.callParent(arguments);
    }
});
