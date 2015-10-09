/**
 * Created by ponty on 9/7/2015.
 */
import React,{Component,findDomNode,PropTypes} from 'react/addons';
import {Link} from 'react-router';
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import UserItem from './../UserItem/userItem'
require('./projectitem.scss')
/**
 *  {
    pID : Number,
pTitle : String,
    bidCount: Number,
    skillArray :[{skill:String}],
startDate : Timestamp,
    projectPrice : Number


}
 *
 *
 *
 * */
export default class ProjectItem extends Component {
    constructor() {
        super()
    }

    convertDateToString() {

    }

    convertMoneyToString() {

    }

    render() {
        let projectObj = this.props.projectObj;

        let projectID = projectObj.pID;
        let projectTitle = projectObj.pTitle;
        let bidCount = projectObj.bidCount;
        let skills =  projectObj.skillArray;
        let pStartDate = projectObj.startDate;
        let pPrice = projectObj.projectPrice;
        let userDp = projectObj.holderDp;
        let userDetails = projectObj.holderDetails;
        let linkParams = {
          pid : projectID,
          title:projectTitle
        };


        return (
                <Link to={`/project-details/${linkParams.pid}/${linkParams.title}`}>
                    <div className="ProjectItem-Body">

<div className="ProjectItem">
                        <div className="Proj-i-row">
                            <div className="title">
                                <span className="blue">Project Title</span>
                            </div>
                            <div className="body">
        <span className="normal">
            {projectTitle}
        </span>
                            </div>
                        </div>
                        <div className="Proj-i-row">
                            <div className="title">
                                <span className="blue">Bids</span>
                            </div>
                            <div className="body">
        <span className="normal">
            {bidCount}
        </span>
                            </div>
                        </div>
                        <div className="Proj-i-row">
                            <div className="title">
                                <span className="blue">Skills</span>
                            </div>
                            <div className="body skill">
        <span className="normal">
            {skills.map((content, index)=> {
                return ('[' + content.skill + ']')
            })
            }
        </span>
                            </div>
                        </div>
                        <div className="Proj-i-row">
                            <div className="title">
                                <span className="blue">Beginning</span>
                            </div>
                            <div className="body">
        <span className="normal">
            {pStartDate}
        </span>
                            </div>
                            <div className="Proj-i-row">
                                <div className="title">
                                    <span className="blue">Price</span>
                                </div>
                                <div className="body">
        <span className="normal">
           $ {pPrice}
        </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                <button className="project-item-bid">Bid</button>

                    </div>
                </Link>

        )
    }
}

ProjectItem.propTypes = {
    projectObj:PropTypes.object
};