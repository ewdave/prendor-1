/**
 * Created by ponty on 10/13/15.
 */
import React,{Component,PropTypes} from 'react';
var Dropzone = require('react-dropzone');

export default class FileUpload extends Component {

    drop = (files) => {
        console.log("this are the selected files"+files);
        files.map((file)=> {
            console.log(file);
            console.log(file.preview);
        })

    }
    uploadFile = () => {
        const index  = this.props.index;
        let fileDOMNode = React.findDOMNode(this.refs.file);
        const file = fileDOMNode.files[0];
        let formData = new FormData();
        if(formData != null) {
            formData.append("myFile",file);
            this.props.onAdd(formData,index);
        }

    }

    render () {
        return (
            <div className="attach-item">
                <Dropzone onDrop={this.drop}>
                    <div className="fileBox" onClick={this.onAdd}>
                        +
                    </div>
                    </Dropzone>
                <div className="action">
                    LoremIpsumLactum.tact
                    <div className="delete">
                        <button className="btn">-</button>
                        <span className="tooltip">delete</span>
                    </div>

                </div>
            </div>
        )
    }
}

/**
 * onAddItem
 * onUploading
 * onDelete
 *
 * */

FileUpload.propTypes = {
    uploadUrl : PropTypes.string.isRequired,
    loadingImage : PropTypes.string,
    fileType : PropTypes.string.isRequired,
    fileSize : PropTypes.number,
    onFinish : PropTypes.func.isRequired,
    onAdd : PropTypes.func.isRequired
}

