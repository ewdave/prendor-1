/**
 * Created by ponty on 9/23/2015.
 */
var axios = require('axios');
import history from './../../../routes/history'

module.exports = () => {
    axios.get('http://localhost:3000/api/getauth')
        .then(
        function (response) {
            console.log(response);
            if(response.data.loggedIn){
                console.log(response.data.username);
                history.replaceState(null, '/profile/' + response.data.username);
            }


        })
        .catch(function (response) {
            console.log(response);
        });


};