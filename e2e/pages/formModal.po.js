const CommonActions = require('../core/CommonActions');

class Form {

    constructor() {
        this.saveButton = '#edit-submit';

        CommonActions.waitForVisible('#s-group-create-new-form');
    }

    clickSaveButton() {
        CommonActions.click(this.saveButton);
    }

}

module.exports = Form;
