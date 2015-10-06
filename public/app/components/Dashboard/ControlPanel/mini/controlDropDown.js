/**
 * Created by ponty on 9/21/2015.
 */
import React,{Component,findDOMNode,PropTypes} from 'react';
import DashBoardItem from './dashBoardItem';


export default class ControlDropDown extends Component {

    constructor(){
        super();
        this.state = {showbody:true}
    }

    changeDisplay = () => {
        let showbody = this.state.showbody;
        this.setState({showbody:!showbody});
    }
    render(){
        const showBody = this.state.showbody;
        const img_url = this.props.img_url;
        const headerTxt = this.props.headerTxt;
        let renderClass;
        if(showBody){
            renderClass = {
                bodyClass : "c-body show",
                fa : "fa fa-arrow-up"
            }
        } else {
            renderClass = {
                bodyClass : "c-body hide",
                fa : "fa fa-arrow-down"
            }
        }
        return (
            <div className="control-drop-down">
                <div className="title">
                    <span className="ProfileIcon"><img src={img_url}/></span>
                    <span>{headerTxt}</span>
                    <i className={renderClass.fa} onClick={()=> this.changeDisplay()}></i>
                </div>
                <div className={renderClass.bodyClass}>
                    {this.props.children}

                    </div>
                </div>
        )
    }

}



/**
 * show body
 *
 * */


ControlDropDown.propTypes = {
    headerTxt : PropTypes.string.isRequired,
    img_url : PropTypes.string.isRequired
}