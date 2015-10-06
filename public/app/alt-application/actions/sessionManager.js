/**
 * Created by ponty on 8/20/2015.
 */

var alt = require('./../alt');
var $  = require('jquery');

class SessionManager {
    createNewSession(obj){
        this.dispatch(obj)
    }

    logout(){
        this.dispatch(true)
    }

    setRegState(val){
        this.dispatch(val)
    }



}

module.exports = alt.createActions(SessionManager);
