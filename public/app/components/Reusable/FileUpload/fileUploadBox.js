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
        this.state = {count: 0, showModal: true, files: [],showList:false};
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    drop = (files) => {
        let oldFiles = this.state.files;

        files.map((file)=> {
            const indexOf = oldFiles.indexOf(file) > -1;

                oldFiles.push(file)

        })
        const count = oldFiles.length;
       this.setState({files: oldFiles,count:count});

    };

    upload = (index) => {
        console.log("Upload file"+index+" to SERVER HERE");
    };
    remove = (index) => {
        console.log("remove  file"+index+" from upload list");
    };

    closeModal() {
        this.setState({showModal: false,showList:true});
    }

    showModal() {
        this.setState({showModal: true});
    }

    render() {
        const files = this.state.files;
        const count = this.state.count;
        const showModal = this.state.showModal;
        const showList = this.state.showList;
        let fileTiles;
        if(showList){
            fileTiles = files.map((content)=> {
                return (<div className="file-tile">
                    {content.name} <br/>
                    {content.size}
                </div>)
            });
        } else {
            fileTiles = "";
        }
        let shouldAdd;
        if (count > 0) {
            shouldAdd = <div className="action"><span className="blue">{count} files</span>
                                <button className="btn" onClick={this.showModal}>+</button>
                        </div>
        } else { shouldAdd = <div className="action">
                <button className="btn" onClick={this.showModal}>+</button>
            </div>
        }
        return (
            <div className="FormBox attach">
                <div className="head">
                    <i className="fa fa-paperclip"></i>
                    <span>Attachments</span>{shouldAdd}
                </div>
                <div className="attach-list">
                    <GeminiScrollbar>
                        <div className="file-tiles">
                            { fileTiles }
                        </div>
                    </GeminiScrollbar>
                </div>
                <Modal open={showModal} closeModal={this.closeModal}>
                    <ModalHeader>
                        Drag and Drop Multiple Files
                    </ModalHeader>

                    <div className="body">

                        <div className="attach-list preview">

                            <GeminiScrollbar>
                                <Dropzone onDrop={this.drop} className="dropBox">
                                    <span> +</span>
                                    <div>Drag & Drop Files</div>
                                </Dropzone>
                                    {
                                        files.map((content, index)=> {
                                            return <UploadItem
                                                            key={content.name}
                                                            index={index}
                                                            upload={this.upload}
                                                            remove={this.remove}
                                                            previewUrl={content.preview}
                                                            fileSize={content.size}
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
