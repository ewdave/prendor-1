/**
 * Created by ponty on 10/14/15.
 */
import React,{Component,PropTypes} from 'react';


export default class UploadItem extends Component {

    upload(){
        const index = this.props.index;
        this.props.upload(index);
    }

    remove(){

        const index = this.props.index;
        this.props.remove(index);
     }

    render(){
        const fileType = this.props.fileType;
        const previewUrl = this.props.previewUrl;
        const fileName = this.props.fileName;
        const fileSize = this.props.fileSize;

        let previewElement;

        switch (fileType){
            case 'image/jpeg' || 'image/jpg' || 'image/JPEG' || 'image/png' || 'image/PNG' || 'image/gif' || 'image/GIF' || 'image/bmp' || 'image/BMP':
             previewElement = <img src={previewUrl} />
                break;

            default :
                console.log('default image here');
                break;
        }

        return (
            <div className="previewBox">
		<span className="preview">
            {previewElement}
            <div className="actions">
                <span className="upload" onClick={this.upload.bind(this)}>
                    <i className="fa fa-upload">
                    </i>
                    upload
                </span>
                <span className="remove" onClick={this.remove.bind(this)}>
                    -
                </span>
            </div>
		</span>
		<div className="file-details">
            <span className="file-name">
                {fileName}</span><span className="file-size">{fileSize}</span>
		</div>
            </div>
        )
    }
}


UploadItem.propTypes = {
    previewUrl:PropTypes.string.isRequired,
    fileType:PropTypes.string.isRequired,
    fileName:PropTypes.string.isRequired,
    fileSize:PropTypes.number.isRequired,
    upload:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
}
