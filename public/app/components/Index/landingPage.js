/**
 * Created by ponty on 8/19/2015.
 */

var React = require('react');
var Slider = require('./../Slider/comps/sliders');
require('./../css/indexR.css');
require('./../css/shared.css');
import Modal from './../Reusable/Modal/modal';
import ModalHeader from './../Reusable/Modal/modalheader';

var LandingPage  = React.createClass({

    getInitialState(){
        return {showSignUp:false,showSignIn:false}
    },
    showSignUp(){
        this.closeSignIn();
        this.setState({showSignUp:true})
    },
    showSignIn(){
        this.closeSignUp();
        this.setState({showSignIn:true})
    },
    closeSignUp(){
        this.setState({showSignUp:false});
    },
    closeSignIn(){
        this.setState({showSignIn:false});
    },
    render (){
        const showSignIn = this.state.showSignIn;
        const showSignUp = this.state.showSignUp;
        return (
        <div>
            <div className="indexHeader">
                <img src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/images/prendor.png"/>
            </div>
            <div className="indexBackground">
                <img src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/images/login%20page%20large.jpg"/>
            </div>
            <div className="indexRight">
                <Slider />
                <div className="BlockSep"></div>
                <div className="indexForm">
                    <div className="localForm">
                        <div className="form">
                            <div className="tour">
                                <span><i className="fa fa-bus"></i><span className="text">Start Tour</span> <span className="tour last-fa"><i className="fa fa-caret-right"></i></span></span>
                            </div>
                        </div>
                    </div>
                    <div className="BlockSep"></div>
                    <div className="formSelector">
                        <button className="otrs blue" onClick={this.showSignIn}>Sign In</button>
                        <span className="otrs">Or</span>
                        <button className="otrs orange" onClick={this.showSignUp}>Sign Up</button>
                    </div>

                </div>
            </div>

            <Modal modalSize={400} open={showSignUp} closeModal={this.closeSignUp}>
                <ModalHeader
                    icon="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/images/prendor%20icon.png"
                    text="Sign Up"/>

                <div className="body">
                    <div className="formSelector">
                        <a className="login-item" href="http://localhost:3000/auth/facebook/">
                            <div className="log-soc">
                                <button className="social"><img
                                    src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/indexIcons/facebook.png"/>
                                </button>
                            </div>
                            <div className="log-oauth">
                                SignUp with Facebook
                            </div>
                        </a>
                        <a className="login-item" href="http://localhost:3000/auth/google">
                            <div className="log-soc">
                                <button className="social"><img
                                    src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/indexIcons/google-icon.png"/>
                                </button>
                            </div>
                            <div className="log-oauth">
                                SignUp with Google
                            </div>
                        </a>
                    </div>
                </div>
                <div className="lower-bar">
                </div>
            </Modal>
            <Modal modalSize={400} open={showSignIn} closeModal={this.closeSignIn}>
                <ModalHeader
                    icon="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/images/prendor%20icon.png"
                    text="Login"/>

                <div className="body">
                    <div className="formSelector">
                        <a className="login-item" href="http://localhost:3000/auth/facebook/">
                            <div className="log-soc">
                                <button className="social"><img
                                    src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/indexIcons/facebook.png"/>
                                </button>
                            </div>
                            <div className="log-oauth">
                               Login with Facebook
                            </div>
                        </a>
                        <a className="login-item" href="http://localhost:3000/auth/google">
                            <div className="log-soc">
                                <button className="social"><img
                                    src="http://localhost/PontySoft/hacks/React-Starter-Kit/prendor/.002/indexIcons/google-icon.png"/>
                                </button>
                            </div>
                            <div className="log-oauth">
                                Login with Google
                            </div>
                        </a>
                    </div>
                </div>
                <div className="lower-bar">
                </div>
            </Modal>
            </div>
        )
    }
});


module.exports = LandingPage;