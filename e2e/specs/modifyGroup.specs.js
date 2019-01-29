const credentials = require ('../../environment').credentials;
const Login = require('../pages/login.po');
const GroupForm = require('../pages/groupFormModal.po');


describe('Login to Schoology', () => {
    it('Login', () => {

        let header = Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);
        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openButton();
        content.clickNewButtonModify();
        content.clickNewButtonOption();
        content.clickNewButtonEdit();

        let groupForm = new GroupForm();
        let group = {
            'Name': 'Mi primer Grupo 1',
            'Description': 'Probando el primer grupo 1',
            'Privacidad': 'group',
            'Acceso': '1',
        };
        groupForm.fillForm(group);
        groupForm.clickSaveButton();



        browser.pause(30000);
    });
});
