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
        this.removeAll = this.removeAll.bind(this)
    }

    generateFillType(fileName){

        let index = fileName.lastIndexOf(".");
        return fileName.substring((index + 1),fileName.length);
    }

    getFileName(fileName){
        let length = fileName.length;

        if(length <= 14){
            return fileName
        } else {
            let index = fileName.indexOf(".");
            let ext = this.generateFillType(fileName);
            let name = fileName.substring(0,9);

            return name+"...."+ext;
        }

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

    remove = (index) => {
       let files  = this.state.files;
        files.splice(index,1);
        this.setState({files:files});
    };

    removeAll() {
        this.setState({files:[],count:0});
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
                return (<div className="file-tile" key={content.preview}>
                    {this.getFileName(content.name)} <br/>
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
                        File Manager
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
                                                            remove={this.remove}
                                                            previewUrl={content.preview}
                                                            fileSize={content.size}
                                                            fileType={content.type}
                                                            fileName={content.name}/>

                                        })
                                    }
                            </GeminiScrollbar>

                        </div>
                        <div className="upload-list">
                            <button className="Button" onClick={this.closeModal}>Ok</button>
                            <button className="Button" onClick={this.removeAll}>Remove All</button>
                            <button className="Button" >Upload All</button>
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
