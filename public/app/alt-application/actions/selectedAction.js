/**
 * Created by aregbede on 21/07/2015.
 */
var alt = require('./../alt');

class SelectedSkillActions {
    addToStore(skill){
        this.dispatch(skill)
    }
}

module.exports = alt.createActions(SelectedSkillActions);