
const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login.po');

describe('Login to Schoology', () => {
    it('Login', () => {
        browser.url('https://app.schoology.com/login');

        //login form
        CommonActions.waitForVisible('#s-user-login-form', 30000);

        Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);

        //click en desactivar el popup de la cuenta
        CommonActions.click('a[href="javascript://"]');

        //Hace clicken el boton Grupo
        CommonActions.click('//span[contains(text(), \'Grupos\')]/parent::button');

        //Haceclick en el link MisGrupos
        CommonActions.click('a[href="/groups"]');

        //Hace click en el boton Crear Grupo
        CommonActions.click('a[href="/groups/new"]');

        // Ingresando el valor en el campo Nombre
        CommonActions.setValue('#edit-name','Grupo Test 2');

        // Ingresando el valor en el campo Description
        CommonActions.setValue('#edit-description','Creando grupos para comenzar un tema');

        //Seleccionando "Privacidad"
        CommonActions.selectByValue('#edit-privacy-level','group');

        //Seleccionando "Acceso"
        CommonActions.selectByValue('#edit-invite-type','1');

        //Hace click en el boton Crear
        CommonActions.click('#edit-submit');

        browser.pause(30000);
    });
});