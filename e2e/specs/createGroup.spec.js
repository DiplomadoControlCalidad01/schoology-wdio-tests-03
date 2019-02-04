const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const GroupForm = require('../pages/groupFormModal.po');
const GroupView = require('../pages/groupView.po');



describe('Group Feature', () => {


    let header;

    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
    });

    it('#BVT Create Group', () => {

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

        let groupView = new GroupView();

        expect(groupView.getNameText()).to.equal(group.Name);
        expect(groupView.getDescriptionText()).to.equal(group.Description);

    });
});
