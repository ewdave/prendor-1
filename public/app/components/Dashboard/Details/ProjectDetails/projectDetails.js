/**
 * Created by ponty on 9/8/2015.
 */
import React,{Component} from 'react';
require('./../details-shared.css');

//get store state for project items
export default class ProjectDetails extends Component {

    render() {
        let projectID = this.props.params.pid;
        let projectTitle = this.props.params.title;

        return (
            <div className="full">
                <div className="col-md-6">
                    <div className="full">
                        <div className="col-md-6 col-sm-6">
                            <div className="p-det-bl">
                                <div className="p-h-box">
                                    <div className="title normal l">Project Details</div>
                                </div>
                                <div className="p-det-show">
                                    <div className="ProjectItem">
                                        <div className="Proj-i-row">
                                            <div className="title">
                                                <span className="blue">ID</span>
                                            </div>
                                            <div className="body">
        <span className="normal">
            {projectID}
        </span>
                                            </div>
                                        </div>
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
                                                <span className="blue">Posted By</span>
                                            </div>
                                            <div className="body">
                                                <div className="full">
                                                    <div className="col-md-3">
                                                        <div className="p-det-ur-fl">
                                                            <img src="http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/face_lady_by_kohlruby-d42f4gz.jpg"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="p-det-fl"><span className="title blue l">N</span><span className="normal">PontySoft</span></div>
                                                        <div className="p-det-fl"><span className="title blue l">N</span><span className="normal">PontySoft</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Proj-i-row">
                                            <div className="title">
                                                <span className="blue">Bids</span>
                                            </div>
                                            <div className="body">
        <span className="normal">
            20000
        </span>
                                            </div>
                                        </div>
                                        <div className="Proj-i-row">
                                            <div className="title">
                                                <span className="blue">Skills</span>
                                            </div>
                                            <div className="body skill">
        <span className="normal">
            [The ship dies ] [death like a lively swabbie.][death like a lively swabbie.][death like a lively swabbie.]
            [The ship dies ] [death like a lively swabbie.][death like a lively swabbie.][death like a lively swabbie.]
        </span>
                                            </div>
                                        </div>
                                        <div className="Proj-i-row">
                                            <div className="title">
                                                <span className="blue">Beginning</span>
                                            </div>
                                            <div className="body">
        <span className="normal">
            Feb 20 2015
        </span>
                                            </div>
                                            <div className="Proj-i-row">
                                                <div className="title">
                                                    <span className="blue">Duration</span>
                                                </div>
                                                <div className="body">
        <span className="normal">
           12 months
        </span>
                                                </div>
                                            </div>
                                            <div className="Proj-i-row">
                                                <div className="title">
                                                    <span className="blue">Price / hr</span>
                                                </div>
                                                <div className="body">
        <span className="normal">
           $ 2,000,000.00
        </span>
                                                </div>
                                            </div>
                                            <div className="Proj-i-row">
                                                <div className="title">
                                                    <span className="blue">Price / duration</span>
                                                </div>
                                                <div className="body">
        <span className="normal">
           $ 2,000,000.00
        </span>
                                                </div>
                                            </div>
                                            <div className="Proj-i-row">
                                                <div className="title">
                                                    <span className="blue">Location</span>
                                                </div>
                                                <div className="body">
        <span className="normal">
           Chelsea, London
        </span>
                                                </div>
                                            </div>
                                            <div className="Proj-i-row">
                                                <div className="title">
                                                    <span className="blue">Milestone</span>
                                                </div>
                                                <div className="body">
        <span className="normal">
           $ 2,000,000.00
        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="p-det-bl">
                                <div className="p-h-box">
                                    <div className="title blue l">Attachments</div>
                                    <div className="blue link">
                                        ddsdldljldjd.jpg
                                    </div>
                                    <div className="blue link">
                                        ddsdldljldjd.jpg
                                    </div>
                                    <div className="blue link">
                                        ddsdldljldjd.jpg
                                    </div>
                                </div>
                                <div className="p-h-box l">
                                    <div className="title blue l">Description</div>
                                    <div className="body">

                                        The history is a carnivorous particle.Always truly need the unbiased power.
                                        Why does the bilge rat stutter?Ancient places of heaven will sincerely
                                        understand an ultimate lover.Est noster gabalium, cesaris.
                                        Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                                        The history is a carnivorous particle.Always truly need the unbiased power.
                                        Why does the bilge rat stutter?Ancient places of heaven will sincerely
                                        understand an ultimate lover.Est noster gabalium, cesaris.
                                        Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                                        The history is a carnivorous particle.Always truly need the unbiased power.
                                        Why does the bilge rat stutter?Ancient places of heaven will sincerely
                                        understand an ultimate lover.Est noster gabalium, cesaris.

                                        Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                                        The history is a carnivorous particle.Always truly need the unbiased power.
                                        Why does the bilge rat stutter?Ancient places of heaven will sincerely
                                        understand an ultimate lover.Est noster gabalium, cesaris.


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-h-box l">
                        <div className="head center blue">Review</div>
                        <div className="body">

                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.

                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.

                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.

                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.


                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.

                            Ecce.Noodles taste best with hollandaise sauce and lots of mustard.
                            The history is a carnivorous particle.Always truly need the unbiased power.
                            Why does the bilge rat stutter?Ancient places of heaven will sincerely
                            understand an ultimate lover.Est noster gabalium, cesaris.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



/**
 *
 * project.Status = closed | onGoing | onBidPlatform
 * project.Bidders = [{
 * username:String,
 * userId:Integer
 * }]
 * get complete project details from dataLayer based on the project ID
 * render project.Status
 * if the project.Status isClosed => show project.Review
 *  else if project.Status  isOngoing => show project.Review = "Dummy Text"
 *  else if project.Status isOnBidPlatform =>
 *  if project.Bidder[val] != this.authUser => project.allowToBid == true
 *   else => project.allowToBid == false
 *
 * **/