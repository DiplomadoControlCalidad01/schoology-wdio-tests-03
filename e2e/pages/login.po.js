const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;

class Login{

    setUserNameTextField(username){

        CommonActions.setValue('#edit-mail', username);

    }
    setPasswordTextField(password){

        CommonActions.setValue('#edit-pass',password);


    }
    clickLoginButton(){
        CommonActions.click('#edit-submit');
    }
    static loginAs(username, password){
        let login = new Login();
        login.setUserNameTextField(username);
        login.setPasswordTextField(password);
        login.clickLoginButton();
    }

}
module.exports =Login;