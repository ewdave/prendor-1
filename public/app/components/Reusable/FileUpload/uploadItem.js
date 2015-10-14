/**
 * Created by ponty on 10/14/15.
 */
import React,{Component,PropTypes} from 'react';


export default class UploadItem extends Component {

    render(){
        const fileType = this.props.fileType;
        const previewUrl = this.props.previewUrl;
        const fileName = this.props.fileName;
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
		</span>
		<div className="uploadAction">
            <div>{fileName}</div>
			<div><button className="Button">upload</button></div>
		</div>
            </div>
        )
    }
}


UploadItem.propTypes = {
    previewUrl:PropTypes.string.isRequired,
    fileType:PropTypes.string.isRequired,
    upload:PropTypes.func,
    fileName:PropTypes.string.isRequired
}
