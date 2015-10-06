/**
 * Created by aregbede on 21/07/2015.
 */
var alt = require('./../alt');
var SelectedSkillActions = require('./../actions/selectedAction');
class SelectedSkillStores {

    constructor(){
        this.selectedList = []

        this.bindAction(SelectedSkillActions.addToStore,this.addToStore)
    }

    addToStore(skill){
        console.log('got the skills here',skill)
        if(this.selectedList.length > 0){
            for(var i = 0; i < this.selectedList.length; i++){

                if(this.selectedList.indexOf(skill) !== -1){
                    console.warn("same elements: do something here")

                } else {
                    this.selectedList.push(skill)
                    console.warn("not the same elements: do something here")
                }
            }
        } else {
            this.selectedList.push(skill)
        }


    }
    /*
     * addToStore (obj skill) {
     * #verify added
     * #if not added {add to selectedSkill array} else {doNotAddToStore}
     * this.selectedList.map((content,index)=> {
     var content_id = content.id;
     console.warn(content_id)
     (content_id.contains(skill.id)?console.log('previously added'):this.selectedList.push(skill))
     })
     * }
     * removeFromStore (obj skill) {
     * #verify added
     * this.selectedList.map((content,index)=>{
     var content_id = content.id;
     (content_id.contains(skill.id)?this.selectedList.pop():false)
     })
     * #if not added {remove from selectedSkill array} else {doNotAddToStore}
     * }
     * */
}


module.exports = alt.createStore(SelectedSkillStores);
