/**
 * Created by ponty on 8/20/2015.
 */
var alt = require('./../alt');
var SessionManager = require('./../actions/sessionManager');

/*
*   stores user session details {email,username,isLoggedIn,regStat}*/
class SessionStore {
    constructor(){
        this.session = {
            email:"",
            isLoggedIn:false,
            regStat:0
        }

        this.bindAction(SessionManager.createNewSession,this.createNewSession);
        this.bindAction(SessionManager.setRegState,this.changeRegStat);

    }

    createNewSession(obj){
        if(this.session.email != ""){
            //do nothing if there is already a session
        } else {
            this.session.email = obj.email;
            this.session.isLoggedIn = obj.isLoggedIn;
            this.session.regStat = obj.regStat;
        }
    }

    changeRegStat(val){
        if(val){
            this.session.regStat = val;
        }
    }

    deleteSession(state) {
       if(state){
           delete this.session;
       }
    }



}


module.exports = alt.createStore(SessionStore);