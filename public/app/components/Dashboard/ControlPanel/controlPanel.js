/**
 * Created by ponty on 9/4/2015.
 */

import React,{findDomNode,Component,PropTypes} from 'react';
import ControlDropDown from './mini/controlDropDown';
import DashBoardItem from './mini/dashBoardItem';
import SideBar from './side_bar';
require('./sidebar.scss');
//need props to get the username and also to get other details
export default class ControlPanel extends Component {

    constructor() {
        super();
    }


    render() {
        return (
          <div>
<SideBar   userDp="/images/imageicon.png"
                     username="Xtterix"/>
          </div>

         
            

        )
    }


}

