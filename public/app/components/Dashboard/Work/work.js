/**
 * Created by ponty on 9/6/2015.
 */

import React,{findDomNode,Component,PropTypes} from 'react';
require('./work-page.css');
require('./../../css/shared.css');
require("./../../../../../node_modules/react-gemini-scrollbar/node_modules/gemini-scrollbar/gemini-scrollbar.css");




export default class WorkSection extends Component {

    render(){
        return (

                <div>
                    {this.props.children}
                    </div>

        )
    }
}
