/**
 * Created by ponty on 9/22/2015.
 */
import React,{Component,PropTypes} from 'react';

export default class ModalHeader extends Component {

    render(){
        const icon = this.props.icon;
        const text = this.props.text;
        return (
            <div className="top-bar">
                <div className="modal-icon">
                    <img src={icon}/></div>
                    <div className="modal-title">{text}
                    </div>
                    <div className="modal-close"><button className="fBtn" onClick={() => this.props.closeModal()}>
                        <i className="fa fa-close"></i></button>
                    </div>

                </div>
                )
    }
}

ModalHeader.propTypes = {
    icon:PropTypes.string,
    text:PropTypes.string.isRequired,
    closeModal:PropTypes.func
}

