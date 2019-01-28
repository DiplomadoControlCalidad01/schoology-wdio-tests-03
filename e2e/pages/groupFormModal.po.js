const CommonActions = require('../core/CommonActions');

const Form = require('./formModal.po');

class GroupForm extends Form {

    constructor() {
        super();
        this.nameTextField = '#edit-name';
        this.descriptionTextField = '#edit-description';
        this.privacidadSelect = '#edit-privacy-level';
        this.accesoSelect = '#edit-invite-type';
    }

    fillForm(groupJson) {
        let groupSteps = {
            'Name': () => CommonActions.setValue(this.nameTextField, groupJson.Name),
            'Description': () => CommonActions.setValue(this.descriptionTextField, groupJson.Description),
            'Privacidad': () => CommonActions.selectByValue(this.privacidadSelect, groupJson.Privacidad),
            'Acceso': () => CommonActions.selectByValue(this.accesoSelect,groupJson.Acceso )
        };
        Object.keys(groupJson).forEach(key => {
            groupSteps[key].call();
        });
    }

}
module.exports =GroupForm;