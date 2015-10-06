/**
 * Created by ponty on 9/3/2015.
 */
import React,{findDomNode,Component,PropTypes} from 'react';
import {Link} from 'react-router';

require('./header.scss');

/**
 * STATE: typingSearch
 * props: notifications, user_image url, users name
 * Funcs: typing, changeUrl,selectSearchItem,logout
 *
 * */
export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {showSearch: false}
    }

    toggleSearch = () => {
        this.setState({showSearch: !this.state.showSearch});
    }

    render() {
        const dpUrl = this.props.dpUrl;
        let textClass;
        //var notificationList = this.props.notList;
        //notification count should be equal to notificationlist lenght
        var dummyNotificationCount = 4;
        const username = this.props.username;
        var searchPageUrl = this.props.searchPageUrl;

        const showSearch = this.state.showSearch;
        switch (showSearch) {
            case true:
                textClass = "text active";
                break;
            case false:
                textClass = "text";
                break;
            default:
                textClass = "text"
        }
        return (
            <header className="MainPageHeader">

                <div>
                    <div className="col-md-1 col-sm-1 col-xs-1">
                        <img className="logo" src={this.props.logo}/>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-3">
                        <span className="search">
                            <input type="text" className={textClass}/>
                            <button className="fa fa-search" onClick={this.toggleSearch}></button>
                        </span>
                    </div>

                    <div className="col-md-4 col-sm-2 hidden-xs">

                    </div>

                    <div className="col-md-4 col-xs-7">
                        <ul className="header-right-nav">
                            <li className="border">

                            </li>
                            <li>
                                <span className="header-user-details"><img className="userDp"
                                                                           src={dpUrl}/>
                               <span className="hidden-xs">{username}</span></span>
                            </li>
                            <li className="border">

                            </li>
                            <li>
                                <span className="header-bell">
                                    <i className="fa fa-bell"></i>
                                    <i className="my_alert">200</i>
                                </span>
                            </li>
                            <li className="border">
                            </li>
                            <li>
                                <a className="header-logout" href="/logout" data-method="delete" rel="nofollow">
                                    <i className="fa fa-power-off"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </header>
        )
    }


}


Header.propTypes = {
    logo: React.PropTypes.string,
    dpUrl: React.PropTypes.string,
    //notList:PropTypes.array,
    username: React.PropTypes.string
    //searchPageUrl:PropTypes.string.isRequired
};
