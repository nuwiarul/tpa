Ext.define('TPA.controller.maintenance.geologis', {
    extend: 'Ext.app.Controller',
    views: [

        'maintenance.geologi.window'
    ],
    stores: [
        'maintenance.geologis'
    ],
    models: ['maintenance.geologi'],
    edit : false,

    init: function () {
        this.control({

            'Maintenance_GeologiWindow > form button[action=save]': {
                click: this.save
            },
            'Maintenance_GeologiWindow > form button[action=close]': {
                click: this.close
            },
            'Maintenance_GeologiWindow > grid button[action=add]': {
                click: this.add
            },
            'Maintenance_GeologiWindow > grid': {
                itemclick: this.edit
            },
            'Maintenance_GeologiWindow > grid button[action=delete]': {
                click: this.remove
            }
        });
    },
    close:function(button) {
        button.up('window').close();
    },
    edit: function (grid) {

        var record = grid.getSelectionModel().getSelection()[0];
        var view = grid.up('window');
        view.down('form').loadRecord(record);

    },
    remove: function (button) {

        var record = button.up('grid').getSelectionModel().getSelection()[0];
        var view = button.up('window');
        var form = view.down('form').getForm();
        var store = this.getStore('maintenance.geologis');
        Ext.Ajax.request({
            url: 'php/maintenance/delete_geologi.php',
            method: 'POST',
            params: {
                id: record.data.id
            },
            success: function(response){
                var result = Ext.JSON.decode(response.responseText);
                Ext.Msg.show({
                    title: 'Sukses',
                    msg: 'Data berhasil di hapus',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.SUCCESS
                });
                store.load();
                form.reset();



            }
        });

    },
    add: function (grid) {
        var view = grid.up('window');
        var form = view.down('form').getForm();
        view.down('grid').getSelectionModel().deselectAll()
        form.reset();

    },

    save: function (button) {
        var form = button.up('form').getForm();
        var store = this.getStore('maintenance.geologis');
        var view = button.up('window');

        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: 'php/maintenance/simpan_geologi.php',
                success: function (f, a) {

                    Ext.Msg.show({
                        title: 'Sukses',
                        msg: 'Data Berhasil di simpan',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.SUCCESS
                    });
                    form.reset();
                    store.load();
                    view.down('grid').getSelectionModel().deselectAll()


                },
                failure: function (form, action) {
                    Ext.Msg.show({
                        title: 'Error',
                        msg: 'Error Koneksi ke Server',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                }


            });
        }
    }

});