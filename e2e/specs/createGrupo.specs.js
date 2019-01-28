
const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login.po');
const GroupForm = require('../pages/groupFormModal.po');



describe('Login to Schoology', () => {
    it('Login', () => {

        let header = Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);

        CommonActions.click('a[href="javascript://"]');
        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openButton();
        content.clickNewButton();

        let groupForm = new GroupForm();
        let group = {
            'Name': 'Mi primer Grupo',
            'Description': 'Probando el primer grupo',
            'Privacidad': 'group',
            'Acceso': '1',
        };
        groupForm.fillForm(group);
        groupForm.clickSaveButton();

        browser.pause(30000);
    });
});
