const CommonActions = require('../core/CommonActions');

class Content {

    constructor() {
        this.newButton = 'a[href="/groups/new"';
    }

    clickNewButton() {
        CommonActions.click(this.newButton);
    }
}

module.exports = Content;