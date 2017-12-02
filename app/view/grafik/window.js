/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('TPA.view.grafik.window' ,{
    extend: 'Ext.window.Window',
    id : 'TPA.view.grafik.window',
    alias : 'widget.Grafik_Window',
    title : 'Grafik',

    layout : {
        type : 'hbox',
        pack : 'start',
        align : 'stretch'
    },
    defaults : {
        frame : true
    },
    width : 600,
    height : 400,
    records : null,
    nilai : 0,
    ti : "",
    te : "",
    initComponent: function() {

        var series = [];
        var fields = [];

        var point = 0;
        var mi = {};
        var ce = {};
        var ma = {};
        var hasils = [];
        var nilai = parseFloat(this.nilai);

        for (i= 0 ; i < this.records.length;i++) {

            var min = parseFloat(this.records[i].data.min);
            var max = parseFloat(this.records[i].data.max);
            var center = parseFloat(this.records[i].data.center);
            var fuzzy = this.records[i].data.fuzzy;
            var s = {
                type: 'scatter',
                name: fuzzy,
                lineWidth: 1,
                xField: 'point' + i + 'x',
                yField: 'point' + i + 'y'

            };

            if (nilai > min && nilai < max) {
                hasils.push({
                    min: min,
                    max: max,
                    nilai: nilai,
                    fuzzy: fuzzy
                });
            }

            fields.push('point' + i + 'x');
            fields.push('point' + i + 'y');
            mi['point' + i + 'x'] = min;
            mi['point' + i + 'y'] = 0;
            ce['point' + i + 'x'] = center;
            ce['point' + i + 'y'] = 1;
            ma['point' + i + 'x'] = max;
            ma['point' + i + 'y'] = 0;
            series.push(s);
        }



        var data = [mi, ce, ma];

        //console.log(data);

        var store = Ext.create('Ext.data.JsonStore', {
            fields: fields,
            data: data
        });


        var config = {

            series: series,
            store: store,
            chartConfig: {
                chart: {
                    marginRight: 130,
                    marginBottom: 120,
                    zoomType: 'x'
                },
                title: {
                    text: this.ti,
                    x: -20 //center
                },

                xAxis: {
                    title: {
                        text: this.te
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
                    text: 'Ni Kadek Ariasih',
                    href: '',
                    style: {
                        cursor: 'pointer',
                        color: '#707070',
                        fontSize: '12px'
                    }
                }
            }
        };

        var grafik = Ext.widget('highchart', config);
        this.items = [grafik];

        for (i = 0; i < hasils.length; i++) {
            var hsl = (hasils[i].max - hasils[i].nilai) / (hasils[i].max - hasils[i].min);
            grafik.addSeries([
                {
                    type: 'scatter',
                    name: "Hasil " + hasils[i].fuzzy,
                    lineWidth: 0,
                    data: [
                        [hasils[i].nilai, hsl]
                    ]
                }
            ], true);
        }


        this.callParent(arguments);


    }
});
