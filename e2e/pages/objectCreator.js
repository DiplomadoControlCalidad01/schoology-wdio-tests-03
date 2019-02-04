const GroupForm = require('../pages/groupFormModal.po');
const Navigator = require('../pages/navigator');

class ObjectCreator {

    static createGroup(group) {
        let content = Navigator.navigateSObject('Group');
        content.clickNewButton();
        let groupForm = new GroupForm();
        groupForm.fillForm(group);
        groupForm.clickSaveButton();
    }

}

module.exports = ObjectCreator;