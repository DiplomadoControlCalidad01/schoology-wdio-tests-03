const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const GroupForm = require('../pages/groupFormModal.po');
const GroupView = require('../pages/groupView.po');
const ObjectCreator = require('../pages/objectCreator');



describe('Gruop Feature - Schoology', () => {

    let header;
    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        let group = {
            'Name': 'Grupo Test 1',
            'Description': 'Probando el primer grupo',
            'Privacidad': 'group',
            'Acceso': '1',
        };
        ObjectCreator.createGroup(group);
    });

    it('#BVT Modify Group', () => {


        let groupView = new GroupView();
        groupView.clickButtonOpction();
        groupView.clickButtonEdit();

        let groupForm = new GroupForm();
        let group = {
            'Name': 'Actualizando nuevamente 4',
            'Description': 'Probando el primer grupo Modificado',
            'Privacidad': 'group',
            'Acceso': '1',
        };
        groupForm.fillForm(group);
        groupForm.clickSaveButton();


        expect(groupView.getNameText()).to.equal(group.Name);
        expect(groupView.getDescriptionText()).to.equal(group.Description);

    });

    it('#BVT Delete Group', () => {

        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openButton();
        content.clickMisGrupos();
        content.clickNewButtonEdit1("Ariela");
        content.clickButtonDelete();


    });
});
