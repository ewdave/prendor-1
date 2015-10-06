/**
 * Created by ponty on 10/5/15.
 */
 import React,{findDomNode,Component,PropTypes} from 'react';

export default class SideBar extends Component {

    renderTeam = () => {
      
        const team_name = this.props.teamName;
        console.log('rendering team layout man')

      if(team_name.length > 0){
          const team_dp = this.props.teamDp;

          return (
              <div className="side-bar-section team">
                  <div className="head">
                      Team
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
                          <a href=""><i className="check"></i><i className="txt">Browse</i></a>
                      </div>
                      <div className="s-l-item">
                          <a href="http://facebook.com"><i className="check"></i><i className="txt">AutoBid </i></a>
                      </div>
                  </div>
                  <div className="s-l-grp">
                      <span className="title">Projects</span>
                      <div className="s-l-item">
                          <a href="http://google.com"><i className="check"></i><i className="txt">StartNew </i></a>
                      </div>
                      <div className="s-l-item">
                          <a href="http://gmail.com"><i className="check"></i><i className="txt">Issued Out </i></a>
                      </div>
                      <div className="s-l-item">
                          <a href="http://dropbox.com"><i className="check"></i><i className="txt">Issued In </i></a>
                      </div>
                  </div>
                  <div className="s-l-grp">
                      <a href="" className="link">Blog</a>
                  </div>
                  <div className="s-l-grp">
                      <a href="" className="link">Chat</a>
                  </div>

                  <div className="s-l-grp news">
                      <a href="" className="link">News</a>
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
                                <a href="#"><i className="check"></i><i className="txt">Browse</i></a>
                            </div>
                            <div className="s-l-item">
                                <a href="http://facebook.com"><i className="check"></i><i className="txt">AutoBid </i></a>
                            </div>
                        </div>
                        <div className="s-l-grp">
                            <span className="title">Projects</span>
                            <div className="s-l-item">
                                <a href="http://google.com"><i className="check"></i><i className="txt">StartNew </i></a>
                            </div>
                            <div className="s-l-item">
                                <a href="http://gmail.com"><i className="check"></i><i className="txt">Issued Out </i></a>
                            </div>
                            <div className="s-l-item">
                                <a href="http://dropbox.com"><i className="check"></i><i className="txt">Issued In </i></a>
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

                </div>
            </div>
        )
    }
}