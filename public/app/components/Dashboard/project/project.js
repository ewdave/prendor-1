/**
 * Created by ponty on 9/6/2015.
 */

import React,{findDomNode,Component,PropTypes} from 'react';

export default class ProjectSection extends Component {

    render(){
        return (
            <div>
                {this.props.children}
                </div>

        )
    }
}
