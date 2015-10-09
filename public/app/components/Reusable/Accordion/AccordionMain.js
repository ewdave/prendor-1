/**
 * Created by ponty on 9/14/2015.
 */
import React,{Component,PropTypes} from "react";


export default class AccordionMain extends Component {

    render(){
        const className = this.props.activeClass;
        const isActive  = this.props.isActive;
        let children;
        if(isActive){
            children = this.props.children;
        } else {
            children = "";
        }
        console.log(isActive)
        return(
           <div>
            <div className={className} onClick={this.props.setActive}>
                <span className="title">{this.props.text}</span>
                
                </div>
                {children}
           </div>
        )
    }
}

AccordionMain.defaultProps = {
    activeClass: "Accordion-Main"
};

AccordionMain.propTypes = {
    activeClass:PropTypes.string.isRequired,
    setActive:PropTypes.func
};
