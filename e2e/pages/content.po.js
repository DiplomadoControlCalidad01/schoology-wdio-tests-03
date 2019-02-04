const CommonActions = require('../core/CommonActions');

class Content {

    constructor() {
        this.newButton = 'a[href="/groups/new"';
        this.newButtonJoin = 'a[href="/enroll/group"';
        this.newButtonEditInf = '.action-links-unfold.active + ul a.action-edit';
        this.buttonMisGrupos = 'a[href="/groups"]';
        this.buttonDelete= '.action-links-unfold.active + ul .action-delete';
        this.linkArchiveGroup = '.action-links-unfold.active + ul .action-archive';

    }

    clickLinkArchiveG() {
        CommonActions.click(this.linkArchiveGroup);
    }

    clickNewButton() {
        CommonActions.click(this.newButton);
    }

    clickButtonDelete() {
        CommonActions.click(this.buttonDelete);
    }

    clickMisGrupos() {
        CommonActions.click(this.buttonMisGrupos);
    }

    clickNewButtonJoin() {
        CommonActions.click(this.newButtonJoin);
    }

    clickNewButtonEdit2() {
        CommonActions.click(this.newButtonEditInf);
    }
    clickNewButtonEdit1(group) {
        CommonActions.click(`//a[text()="${group}"]/ancestor::li/descendant::div[contains(@class, "action-links-unfold")]`);
    }

    clickLinkGroup(nameGroup) {
        CommonActions.click(`//a[text()="${nameGroup}"]/ancestor::li/div[contains(@class,"middle")]/a`);
    }

}

module.exports = Content;