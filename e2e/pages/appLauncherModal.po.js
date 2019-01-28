'use strict';

const CommonActions = require('../core/CommonActions');
const Content = require('./content.po');

class AppLauncherModal {


    constructor() {
        this.newButton = 'a[href="/groups"';
    }

    openButton(button) {
        CommonActions.click(this.newButton);
        return new Content();
    }

}

module.exports = AppLauncherModal;
