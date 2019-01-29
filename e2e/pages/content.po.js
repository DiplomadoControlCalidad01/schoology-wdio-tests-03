const CommonActions = require('../core/CommonActions');

class Content {

    constructor() {
        this.newButton = 'a[href="/groups/new"';
        this.newButtonJoin = 'a[href="/enroll/group"';
        this.newButtonModify = 'a[href="/group/1923602210"';
        this.newButtonOption = '//span[contains(text(),"Opciones del grupo")]/parent::div';
        this.newButtonEditInf = 'a[href="/group/1923602210/edit"]';
    }

    clickNewButton() {
        CommonActions.click(this.newButton);
    }

    clickNewButtonJoin() {
        CommonActions.click(this.newButtonJoin);
    }

    clickNewButtonModify() {
        CommonActions.click(this.newButtonModify);
    }
    clickNewButtonOption() {
        CommonActions.click(this.newButtonOption);
    }
    clickNewButtonEdit() {
        CommonActions.click(this.newButtonEditInf);
    }
}

module.exports = Content;