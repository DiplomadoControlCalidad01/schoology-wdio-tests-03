const credentials = require ('../../environment').credentials;
const Login = require('../pages/login.po');
const GroupForm = require('../pages/groupFormModal.po');


describe('Login to Schoology', () => {
    it('Login', () => {

        let header = Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);

        //CommonActions.click('a[href="javascript://"]');
        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openButton();
        content.clickNewButtonJoin();

        let joinForm = new GroupForm();
        let join = {
            'Codigo': 'JKHDQ-XFR42',
        };
        joinForm.fillJoin(join);
        joinForm.clickSaveButton();

    });
});