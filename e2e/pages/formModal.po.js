const CommonActions = require('../core/CommonActions');

class Form {

    constructor() {
        this.saveButton = '#edit-submit';
    }

    clickSaveButton() {
        CommonActions.click(this.saveButton);
    }

}

module.exports = Form;
