/**
 * Created by ponty on 9/22/2015.
 */
import React,{Component,PropTypes} from 'react';

export default class ModalHeader extends Component {

    render(){
        const icon = this.props.icon;
        return (
            <div className="top-bar">
                <div className="modal-icon">
                    <img src={icon}/></div>
                    <div className="modal-title">
                        {this.props.children}
                    </div>
                    <div className="modal-close">
                        <button className="fBtn" onClick={() => this.props.closeModal()}>
                        X</button>
                    </div>

                </div>
                )
    }
}

ModalHeader.propTypes = {
    icon:PropTypes.string,
    closeModal:PropTypes.func
}

ModalHeader.defaultProps = {
    icon: "/images/prendoricon.png"
}

