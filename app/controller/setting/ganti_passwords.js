Ext.define('TPA.controller.setting.ganti_passwords', {
    extend: 'Ext.app.Controller',
    views: [

        'setting.ganti_password.window'
    ],
    stores: [

    ],
    models: [],
    edit : false,

    init: function () {
        this.control({

            'Setting_GantiPasswordWindow > form button[action=save]': {
                click: this.save
            },
            'Setting_GantiPasswordWindow > form button[action=close]': {
                click: this.close
            }
        });
    },
    close:function(button) {
        button.up('window').close();
    },

    save: function (button) {
        var form = button.up('form').getForm();
        var view = button.up('window');

        var values = form.getValues();

        if (values.new_password == values.confirm_password) {
            if (form.isValid()) {
                form.submit({
                    method: 'POST',
                    url: 'php/setting/ganti_password.php',
                    success: function (f, a) {

                        console.log(f);

                        Ext.Msg.show({
                            title: 'Sukses',
                            msg: 'Password berhasil di ganti',
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.SUCCESS
                        });
                        view.close();

                    },
                    failure: function (form, action) {
                        Ext.Msg.show({
                            title: 'Error',
                            msg: 'Password Lama Salah',
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        });
                    }


                });
            }
        } else {
            Ext.Msg.show({
                title: 'Error',
                msg: 'Password Tidak Sama',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }


    }

});