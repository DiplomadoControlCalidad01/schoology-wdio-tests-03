const CommonActions = require('../core/CommonActions');

class GroupView {

    constructor() {

        this.nameText = '//span[contains(@class,"group-title")]//descendant::a';
        this.descriptionText = '.group-info';
        this.newButtonOption = '//span[contains(text(),"Opciones del grupo")]/parent::div';
        this.buttonEdit =  'a.edit-group';

    }

    clickButtonOpction() {
        CommonActions.click(this.newButtonOption);
    }

    clickButtonEdit() {
        CommonActions.click(this.buttonEdit);
    }

    getNameText(){
        return CommonActions.getText(this.nameText);
    }

    getDescriptionText(){
        return CommonActions.getText(this.descriptionText);
    }

}

module.exports = GroupView;