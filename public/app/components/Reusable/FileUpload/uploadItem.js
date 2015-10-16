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
           let index = fileName.indexOf(".");
           let ext = this.generateFillType(fileName);
           let name = fileName.substring(0,9);

           return name+"...."+ext;
       }

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
               previewElement = <i className="fileType">{this.generateFillType(fileName)}</i>
                break;
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
            <span className="file-size">{fileSize}</span>
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
    remove:PropTypes.func.isRequired
}
