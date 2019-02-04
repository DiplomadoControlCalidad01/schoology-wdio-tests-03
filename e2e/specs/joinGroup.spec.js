const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
const GroupForm = require('../pages/groupFormModal.po');
const GroupView = require('../pages/groupView.po');


describe('Group Feature - Schoology', () => {


    let header;

    beforeEach(() => {
        header = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
    });

    it('Join Group', () => {

        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openButton();
        content.clickNewButtonJoin();

        let joinForm = new GroupForm();
        let join = {

            'Codigo': 'N55BT-MQ433',

        };
        joinForm.fillJoin(join);
        joinForm.clickSaveButton();
        content.clickLinkGroup('Amalia1');

        let groupView = new GroupView();

        expect(groupView.getNameText()).to.equal("Amalia1");

    });
});