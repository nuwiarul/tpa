Ext.define('TPA.controller.maintenance.sungai_besars', {
    extend: 'Ext.app.Controller',
    views: [

        'maintenance.sungai_besar.window'
    ],
    stores: [
        'maintenance.sungai_besars'
    ],
    models: ['maintenance.sungai_besar'],
    edit : false,

    init: function () {
        this.control({

            'Maintenance_SungaiBesarWindow > form button[action=save]': {
                click: this.save
            },
            'Maintenance_SungaiBesarWindow > form button[action=close]': {
                click: this.close
            },
            'Maintenance_SungaiBesarWindow > grid button[action=add]': {
                click: this.add
            },
            'Maintenance_SungaiBesarWindow > grid': {
                itemclick: this.edit
            },
            'Maintenance_SungaiBesarWindow > grid button[action=delete]': {
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
        var store = this.getStore('maintenance.sungai_besars');
        Ext.Ajax.request({
            url: 'php/maintenance/delete_sungai_besar.php',
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
        var store = this.getStore('maintenance.sungai_besars');
        var view = button.up('window');

        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: 'php/maintenance/simpan_sungai_besar.php',
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