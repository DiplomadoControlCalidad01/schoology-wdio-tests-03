const {url} = require ('../../environment');
const CommonActions = require('../core/CommonActions');
const Header = require ('../pages/header.po');

class Login{

    constructor() {
        this.usernameTextField = '#edit-mail';
        this.passwordTextField = '#edit-pass';
        this.loginButton = '#edit-submit';

        browser.url(url);
        CommonActions.waitForVisible('#s-user-login-form');
    }

    setUserNameTextField(username){

        CommonActions.setValue(this.usernameTextField, username);

    }
    setPasswordTextField(password){

        CommonActions.setValue(this.passwordTextField,password);


    }
    clickLoginButton(){
        CommonActions.click(this.loginButton);
    }
    static loginAs(username, password){
        let login = new Login();
        login.setUserNameTextField(username);
        login.setPasswordTextField(password);
        login.clickLoginButton();
        return new Header();
    }

}
module.exports =Login;
