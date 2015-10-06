/**
 * Created by ponty on 9/17/2015.
 */
import React,{Component,PropTypes,findDOMNode} from 'react';
import GeminiScrollbar from 'react-gemini-scrollbar';
require('./../details-shared.css');

export default class ProfilePage extends Component {

    render() {
        const username = this.props.params.username;
        return (
            <div className="full">
                <div className="col-md-3  col-sm-5">
                    <div className="p-h-box">
                        <div className="img-round">
                            <img
                                src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/dashboard/testDp/lady-gaga.jpg"/>
                        </div>
                        <div className="title blue">{username}</div>
                    </div>
                    <div className="p-h-box">
                        <div className="InfoDisplay">
                            <div className="InfoDisplayItem">
                                <div className="InfoDisplayKey">Country</div>
                                <div className="InfoDisplayKey">State</div>
                                <div className="InfoDisplayKey">City</div>
                                <div className="InfoDisplayKey">Website</div>
                                <div className="InfoDisplayKey">Address</div>
                            </div>
                            <div className="InfoDisplayItem">
                                <div className="InfoDisplayValue">Nigeria</div>
                                <div className="InfoDisplayValue">Lagos</div>
                                <div className="InfoDisplayValue">Ikeja</div>
                                <div className="InfoDisplayValue">www.muchi.com</div>
                                <div className="InfoDisplayValue">No 6 Salem Street, Morogbo, Lagos, Nigeria.</div>
                            </div>


                        </div>
                    </div>
                    <div className="p-h-box l">
                        <div className="title center blue">About</div>
                        <div className="body">
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
                <div className="col-md-9 col-sm-7">
                    <div className="full">
                        <div className="col-md-5">
                            user skill display page is here
                        </div>
                    </div>
                    <div className="p-h-box l">
                        <div className="title normal l">Portfolio</div>
                        <div className="p-h-scroll">
                            <GeminiScrollbar>
                                <div className="full">
                                    list of project items displaying the users portfolio
                                </div>
                                </GeminiScrollbar>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



/**
 * Url Params -> profile name or username preferable name
 *
 *  onEnter Page -> getDetails from dataLayer
 *  getUser Portfolio details from dataLayer
 *  also set a will component transitionFromPage => {
 *  stop dataLayer from sending more details to page and
 *  also from getting more details from server side
 *  }
 * */