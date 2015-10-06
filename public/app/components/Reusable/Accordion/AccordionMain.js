/**
 * Created by ponty on 9/14/2015.
 */
import React,{Component,PropTypes} from "react";


export default class AccordionMain extends Component {

    render(){
        const className = this.props.activeClass;
        return(
            <li className={className} onClick={this.props.setActive}>
                <span>{this.props.text}</span><i className="fa fa-arrow-up"></i>
                {this.props.children}
                </li>
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
