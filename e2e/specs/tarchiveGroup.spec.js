const {credentials} = require('../../environment');
const Login = require('../pages/login.po');
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


    it('Archive Group', () => {

        let appLauncherModal = header.clickAppLauncherButton();
        let content = appLauncherModal.openButton();
        content.clickMisGrupos();
        content.clickNewButtonEdit1("Ariela");
        content.clickLinkArchiveG();

    });
});
