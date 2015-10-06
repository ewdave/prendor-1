/**
 * Created by ponty on 9/7/2015.
 */

import React,{findDomNode,Component,PropTypes} from 'react';
import {Link} from 'react-router';
require('./useritem.css')

//array format = [{key:string,value:""}]
export default class UserItem extends Component {

    render() {
        let details = this.props.holderDetails;
        let userDp = this.props.holderDp;
        return (
            <div className="UserItem">
                <div className="User-I-Row"><span className="logo"><img src={userDp}/></span></div>
                {details.map((content, index) => {
                    //if the content key is N == (name) then make it a link to the user profile or team page
                    if (content.key == "N") {
                        return (
                            <div className="User-I-Row" key={index}><span className="abbrev"><span
                                className="blue">{content.key}</span></span><span
                                className="text">{content.value}</span></div>)
                    }
                    else {
                        return (
                            <div className="User-I-Row" key={index}><span className="abbrev"><span
                                className="blue">{content.key}</span></span><span
                                className="text">{content.value}</span></div>)
                    }
                })}
            </div>
        )
    }
}


UserItem.propTypes = {
    holderDetails: PropTypes.array.isRequired,
    holderDp: PropTypes.string.isRequired
};
