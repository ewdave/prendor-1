/**
 * Created by ponty on 10/5/15.
 */
 import React,{findDomNode,Component,PropTypes} from 'react';
 import {Link} from 'react-router';

export default class SideBar extends Component {

    renderTeam = () => {
      
        const team_name = this.props.teamName;
        const url_team_name = team_name+"_org";

        console.log('rendering team layout man')

      if(team_name.length > 0){
          const team_dp = this.props.teamDp;

          return (
              <div className="side-bar-section team">
                  <div className="head">
                      Team
                  </div>
                  <div className="s-l-grp">
                      <a href="" className="link">Create Team</a>
                  </div>
                  <div className="profile">
        <span>
          <img src={team_dp} className="display-img"/>
        </span>
        <span className="name">
          {team_name}
        </span>
        <span className="edit-btn">
          <i className="fa fa-pencil"></i>
        </span>
                  </div>
                  <div className="s-l-grp">
                      <span className="title">Work</span>
                      <div className="s-l-item">
                        <Link to={`/work/${url_team_name }/browse/`} activeClassName="active"><i className="check"></i><i className="txt">Browse</i></Link>
                      </div>
                      <div className="s-l-item">
                          <Link to={`/work/${url_team_name }/autobid/`} activeClassName="active"><i className="check"></i><i className="txt">AutoBid </i></Link>
                      </div>
                  </div>
                  <div className="s-l-grp">
                      <span className="title">Projects</span>
                      <div className="s-l-item">
                          <Link to={`/projects/${url_team_name }/startnew/`} activeClassName="active"><i className="check"></i><i className="txt">StartNew </i></Link>
                      </div>
                      <div className="s-l-item">
                          <Link to={`/projects/${url_team_name }/issuedOut/`} activeClassName="active"><i className="check"></i><i className="txt">Issued Out </i></Link>
                      </div>
                      <div className="s-l-item">
                          <Link to={`/projects/${url_team_name }/issuedIn/`} activeClassName="active"><i className="check"></i><i className="txt">Issued In </i></Link>
                      </div>
                  </div>
                  <div className="s-l-grp">
                      <a href="" className="link">Blog</a>
                  </div>
                  <div className="s-l-grp">
                      <a href="" className="link">Chat</a>
                  </div>

                  
              </div>

          )
      } else {
          return (
              <div className="side-bar-section team">
                  <div className="head">
                      Team
                  </div>
                  <div className="s-l-grp">
                      <a href="" className="link">Create Team</a>
                  </div>
              </div>
          )
      }
    }

    render(){

        const username = this.props.username;
        const userDp = this.props.userDp;

        return(
            <div className="side-bar-component">
                <div className="col-md-2">
                    <div className="side-bar-section">
                        <div className="head">
                            Individual
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
                            <a href="" className="link">Blog</a>
                        </div>
                        <div className="s-l-grp">
                            <a href="" className="link">Payment</a>
                        </div>

                    </div>

                    {this.renderTeam()}

                     <div className="s-l-grp news">
                      <Link to="/" className="link" activeClassName="active">News</Link>
                  </div>

                </div>
            </div>
        )
    }
}