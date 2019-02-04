const Header = require('../pages/header.po');

class Navigator {

    static navigateSObject(sObject) {
        let appLauncherModal = new Header().clickAppLauncherButton();
        return appLauncherModal.openButton(sObject);
    }

}

module.exports = Navigator;