/**
 * Created by ponty on 10/13/15.
 */
import React,{Component,PropTypes} from 'react';
import FileUpload from './fileUpload';
import GeminiScrollbar from 'react-gemini-scrollbar';

export default class UploadBox extends Component {
    constructor() {
        super();
        this.state = {list: [{id:0,formData:null,response:""}]}
    }

    Add(formData,index) {
        let list = this.state.list;
        list[index].formData = formData;
        const id =+ list.length;
        const obj = {
            id: id,
            formData:null,
            response: ""
        }
        list = list.push(obj);
        this.setState({list: list});
    }

    finish(){
        console.log('finish')
    }

    render() {
        const list = this.state.list;
        const uploadUrl = this.props.uploadUrl;
        const loadingImage = this.props.loadingImage;
        const fileType = this.props.fileType;
        const fileSize = this.props.fileSize;

        const uploadItems = list.map((content,index) => {

            return <FileUpload
                               key={index}
                               index={index}
                               uploadUrl={uploadUrl}
                               loadingImage={loadingImage}
                               fileType={fileType}
                               fileSize={fileSize}
                               formData={content.formData}
                               onAdd={this.Add}
                               onFinish={this.finish}

                    />

        })
        return (
            <div className="attach-list">
                <GeminiScrollbar>
                {uploadItems}
                </GeminiScrollbar>
            </div>
        )
    }
}

UploadBox.propTypes = {
    uploadUrl: PropTypes.string.isRequired,
    loadingImage: PropTypes.string,
    fileType: PropTypes.string,
    fileSize: PropTypes.number,
}

UploadBox.defaultProps = {
    loadingImage: "images/prendor-loading.gif",
    fileType:"img",
    fileSize:8
}


/*
* FileObject
* filename:"",
* state:none/loading/failed,
* response:""
*
* **/
