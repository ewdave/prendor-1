/**
 * Created by ponty on 10/13/15.
 */
import React,{Component,PropTypes} from 'react';
import GeminiScrollbar from 'react-gemini-scrollbar';
import Modal from './../Modal/modal';
import ModalHeader from './../Modal/modalheader';
import Dropzone from 'react-dropzone';
import UploadItem from './uploadItem';
require('./file-box.scss');

export default class UploadBox extends Component {
    constructor() {
        super();
        this.state = {count: 0, showModal: false, files: []}
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    drop = (files) => {
        let oldFiles = this.state.files;

        files.map((file)=> {
            const indexOf = oldFiles.indexOf(file) > -1;
            if(!indexOf){
                oldFiles.push(file)
            } else {
                console.log('contains file')
            }
        })
       this.setState({files: oldFiles});

    }



    closeModal() {
        this.setState({showModal: false});
    }

    showModal() {
        this.setState({showModal: true});
    }


    render() {
        const files = this.state.files;
        const count = this.state.count;
        const showModal = this.state.showModal;
        let shouldAdd;
        if (count > 0) {
            shouldAdd = <span className="blue">20  files</span>;
        } else {
            shouldAdd = <div className="action">
                <button className="btn" onClick={this.showModal}>+</button>
            </div>;
        }
        return (
            <div className="FormBox attach">
                <div className="head">
                    <i className="fa fa-paperclip"></i>
                    <span>Attachments</span>{shouldAdd}
                </div>
                <div className="attach-list">
                    <GeminiScrollbar>

                    </GeminiScrollbar>
                </div>
                <Modal open={showModal} closeModal={this.closeModal}>
                    <ModalHeader>
                        Drag and Drop Multiple Files
                    </ModalHeader>

                    <div className="body">
                        <Dropzone onDrop={this.drop} className="dropBox">
                            +
                        </Dropzone>
                        <div className="attach-list preview">
                            <GeminiScrollbar>
                                    {
                                        files.map((content, index)=> {
                                            return <UploadItem key={content.name}
                                                            previewUrl={content.preview}
                                                            fileType={content.type}
                                                            fileName={content.name}/>

                                        })
                                    }
                            </GeminiScrollbar>
                        </div>

                    </div>
                </Modal>
            </div>

        )
    }
}



/*
 * FileObject
 * filename:"",
 * state:none/loading/failed,
 * response:""
 *
 * **/
