/**
 * Created by ponty on 10/5/15.
 */
 import React,{findDomNode,Component,PropTypes} from 'react';
 import {Link} from 'react-router';
 require('./sidebar.scss');

export default class SideBar extends Component {

    render(){

        const username = this.props.username;
        const userDp = this.props.userDp;

        return(
            <div className="side-bar-component">
                <div className="col-md-2 hidden-sm hidden-xs">
                    <div className="side-bar-section">
                        <div className="head">
                            Dashboard
                        </div>
                        <div className="profile">
        <span>
          <img src={userDp} className="display-img" />
        </span>
        <span className="name">
          {username}
        </span>
        <span className="edit-btn">
          <i className="fa fa-pencil"></i>
        </span>
                        </div>
                        <div className="s-l-grp">
                            <span className="title">Work</span>
                            <div className="s-l-item">
                                <Link to={`/work/${username}/browse/`} activeClassName="active"><i className="check"></i><i className="txt">Browse</i></Link>
                            </div>
                            <div className="s-l-item">
                                <Link to={`/work/${username}/autobid/`} activeClassName="active"><i className="check"></i><i className="txt">AutoBid </i></Link>
                            </div>
                        </div>
                        <div className="s-l-grp">
                            <span className="title">Projects</span>
                            <div className="s-l-item">
                                <Link to={`/projects/${username}/startnew/`} activeClassName="active"><i className="check"></i><i className="txt">StartNew </i></Link>
                            </div>
                            <div className="s-l-item">
                                <Link to={`/projects/${username}/issuedOut/`} activeClassName="active"><i className="check"></i><i className="txt">Issued Out </i></Link>
                            </div>
                            <div className="s-l-item">
                                <Link to={`/projects/${username}/issuedIn/`} activeClassName="active"><i className="check"></i><i className="txt">Issued In </i></Link>
                            </div>
                        </div>
                        <div className="s-l-grp">
                            <a href="" className="title">Blog</a>
                        </div>
                        <div className="s-l-grp">
                            <a href="" className="title">Payment</a>
                        </div>
                        <div className="s-l-grp">
                            <a href="" className="title">Chat</a>
                        </div>
                        <div className="s-l-grp">
                            <a href="" className="title">Todos</a>
                        </div>
                        <div className="s-l-grp">
                            <a href="" className="title">Tasks</a>
                        </div>

                    </div>


                     
                </div>
            </div>
        )
    }
}