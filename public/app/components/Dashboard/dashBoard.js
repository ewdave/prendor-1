/**
 * Created by ponty on 9/6/2015.
 */
import React,{findDomNode,Component,PropTypes} from 'react';
require('./dashboard.scss');
require('./../css/boot.css');
require('./../css/constants.scss');
require('./../css/shared.scss');

import  SideBar  from './ControlPanel/side_bar';
import Header from './Header/header';

export default class DashBoard extends Component {

    render() {
        return (
            <div>
                <Header logo="/images/prendoricon.png"
                       dpUrl="/images/imageicon.png"
                       username="Xtterix Designs Company" />

                <div className="MainBodySection">
                    <div className="full">
                        <SideBar   userDp="/images/imageicon.png"
                                   username="Xtterix"/>
                        
                        <div className="col-md-10 col-sm-12">
                            <div className="MainMiddleMonitor">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
