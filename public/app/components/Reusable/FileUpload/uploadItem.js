/**
 * Created by ponty on 10/14/15.
 */
import React,{Component,PropTypes} from 'react';


export default class UploadItem extends Component {


    remove(){

        const index = this.props.index;
        this.props.remove(index);
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
           let ext = this.generateFillType(fileName);
           let name = fileName.substring(0,9);

           return name+"...."+ext;
       }

    }

    renderPreview(fileType,previewUrl){
        let prevElem;
        switch (fileType){
            case 'jpeg' || 'jpg' || 'JPEG':
                console.log('here')
                prevElem = <img src={previewUrl} />
                break;
            case 'jpg' || 'JPEG':
                console.log('here');
                prevElem = <img src={previewUrl} />
                break;
            case 'png' || 'PNG':
                prevElem = <img src={previewUrl} />
                break;
            case  'gif' || 'GIF':
                prevElem = <img src={previewUrl} />
                break;
            case  'bmp' || 'BMP':
                prevElem = <img src={previewUrl} />
                break;
            default :
                prevElem = <i className="fileType">{fileType}</i>
                break;
        }

        return prevElem;

    }

    render(){

        const previewUrl = this.props.previewUrl;
        const fileName = this.props.fileName;
        const fileSize = this.props.fileSize;
        const fileType = this.generateFillType(fileName);
        const state = this.props.state;
        let previewElement;

        if(state == 0){
            previewElement = <img src="/images/prendor-loading.gif" className="loading" />
        } else {
            previewElement = this.renderPreview(fileType,previewUrl);
        }
        return (
            <div className="previewBox">
		<span className="preview">
            {previewElement}
            <div className="actions">
                <span className="remove" onClick={this.remove.bind(this)}>
                    <i className="fa fa-close">
                    </i>
                    remove
                </span>

            </div>
		</span>
		<div className="file-details">
            <span className="file-name">
                {this. getFileName(fileName)}
            </span>
            <span className="file-size">{fileSize/1000000} MB</span>
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
    remove:PropTypes.func.isRequired,
    state:PropTypes.number.isRequired
}
