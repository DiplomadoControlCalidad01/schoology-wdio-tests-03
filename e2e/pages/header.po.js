
const CommonActions = require('../core/CommonActions');
const AppLauncherModal =  require('../pages/appLauncherModal.po');

class Header{

    constructor(){

        this.appLaucherButton = '//span[contains(text(),"Grupos")]/parent::button';
        CommonActions.waitForVisible('#header');

    }


    clickAppLauncherButton (){
        CommonActions.click(this.appLaucherButton);
        return new AppLauncherModal();

    }
}

module.exports = Header;