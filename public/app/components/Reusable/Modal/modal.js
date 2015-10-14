/**
 * Created by ponty on 9/22/2015.
 */
import React,{Component,PropTypes} from 'react/addons';
import ModalHeader from './modalheader';
require('./modal.scss');



export default class Modal extends Component {

    constructor(){
        super();
    }

    closeModal = () => {
        this.props.closeModal();
    };



    render(){
        let shouldShowModal = this.props.open;
        let overlay;
        if(shouldShowModal){
            overlay = "overlay show"
        } else {
            overlay = "overlay hide"
        }
        const divStyle = {
            width:this.props.modalSize
        }

        let items = React.Children.map(this.props.children,(child,index)=>{

            if(child){
                return React.addons.cloneWithProps(child, {
                    closeModal: () => this.closeModal()
                })
            } else {
                return child;
            }
        });

        return (
            <div className={overlay}>
                <div className="Middle" style={divStyle}>

                    <div className="modal">
                        {
                            items
                        }
                    </div>
                </div>
            </div>
        )
    }
}


Modal.propTypes = {
    open:PropTypes.bool,
    closeModal:PropTypes.func,
    modalSize:PropTypes.number
};

Modal.defaultProps = {open:false};
