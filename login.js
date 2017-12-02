/**
 * Created by arul on 4/7/14.
 */
Ext.require([
    'Ext.form.*',
    'Ext.layout.container.Absolute',
    'Ext.window.Window'
]);

Ext.onReady(function () {
    var form = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        url: 'php/login.php',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        defaultType: 'textfield',
        items: [
            {
                fieldLabel: 'Username',
                name: 'username',
                allowBlank: false
            },
            {

                fieldLabel: 'Password',
                name: 'password',
                inputType: 'password',
                allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Reset',
                iconCls: 'reload',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            },
            {
                text: 'Login',
                formBind: true, //only enabled once the form is valid
                iconCls: 'login',
                disabled: true,
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            method: 'POST',
                            success: function (form, action) {
                                //Ext.Msg.alert('Success', action.result.msg);
                                if (action.result.success) {
                                    window.location = "index.php";
                                } else {
                                    Ext.Msg.alert('Success', "Username atau password salah");
                                }

                            },
                            failure: function (form, action) {
                                Ext.Msg.alert('Success', "Username atau password salah");
                            }
                        });
                    }
                }
            }
        ]
    });

    var win = Ext.create('Ext.window.Window', {
        autoShow: true,
        title: "Login",
        width: 300,
        closable: false,
        minWidth: 150,
        minHeight: 150,
        layout: 'fit',
        iconCls: 'login_window',
        plain: true,
        items: form


    });
});