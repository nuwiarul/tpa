Ext.define('TPA.controller.grafik.scatters', {
    extend: 'Ext.app.Controller',
    views: [

        'grafik.scatter.window'
    ],
    stores: [
        'grafik.scatters'
    ],
    models: ['grafik.scatter'],
    view: null,
    init: function () {

        this.control({

            'Grafik_ScatterWindow': {
                afterrender: this.afterrender
            }
        });

        store = this.getStore('grafik.scatters');

        store.on({
            load: this.load,
            scope: this
        })

    },
    load: function (store) {
        var series = [];
        var fields = [];

        var point = 0;
        var min = {};
        var center = {};
        var max = {};
        var hasils = [];
        var nilai = parseInt(this.view.nilai);
        store.each(function (record) {
            var s = {
                type: 'scatter',
                name: record.data.fuzzy,
                lineWidth: 1,
                xField: 'point' + point + 'x',
                yField: 'point' + point + 'y'

            };

            if (nilai > record.data.min && nilai < record.data.max) {
                hasils.push({
                    min: parseInt(record.data.min),
                    max: parseInt(record.data.max),
                    nilai: nilai,
                    fuzzy: record.data.fuzzy
                });
            }

            fields.push('point' + point + 'x');
            fields.push('point' + point + 'y');
            min['point' + point + 'x'] = parseInt(record.data.min);
            min['point' + point + 'y'] = 0;
            center['point' + point + 'x'] = parseInt(record.data.center);
            center['point' + point + 'y'] = 1;
            max['point' + point + 'x'] = parseInt(record.data.max);
            max['point' + point + 'y'] = 0;
            series.push(s);
            point++;
        }, this);


        var data = [min, center, max];

        console.log(data);

        var st = Ext.create('Ext.data.JsonStore', {
            fields: fields,
            data: data
        });


        var scatter = {

            series: series,
            store: st,
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

        var grafik = Ext.widget('highchart', scatter);
        this.view.add(grafik);

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


    },
    afterrender: function (view) {
        if (view) {
            this.view = view;
            store = this.getStore('grafik.scatters');
            store.load();
        }


    }

});