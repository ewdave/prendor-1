/**
 * Created by ponty on 9/4/2015.
 */

let workLinks = [
    {itemName: 'Browse', component: "/bazaar/", urlParam: {}},
    {itemName: 'AutoBid', component: "/bazaar/autobid", urlParam: {}}
];
let projectLinks = [
    {itemName: 'StartNew', component: "/project/", urlParam: {}},
    {itemName: 'Current', component: "/project/current", urlParam: {}},
    {itemName: 'Completed', component: "/project/completed", urlParam: {}}
];

let profileLinks = [
    {itemName: 'Xtterix Designs Company', linkUrl: "profile", urlParam: {username: "Xtterix Designs Company"}}
]

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
<SideBar teamDp="http://localhost:3000/assets/icons/prendoricon-1bb51131c4d2de4f00934d43e3d4b189cadc706f457069c3005aaeddc1204102.png"
                     userDp="http://localhost:3000/assets/apple-touch-icon-120x120-efce3e5425f324ff6c8786ad41969252a87e18903f3199ff93f6fc55d12bad70.png"
                     username="Xtterix"
                     teamName="Xtterix Designs Company"/>
          </div>

         
            

        )
    }


}

