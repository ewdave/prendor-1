/**
 * Created by ponty on 9/14/2015.
 */
import React,{findDOMNode,Component,PropTypes} from 'react';
import GeminiScrollbar from 'react-gemini-scrollbar';

export default class CheckList extends Component {

    checkItem = (index,parentIndex) =>{

        this.props.onCheckItem(index,parentIndex);

    }
    render() {
        const listItems = this.props.listItems;
        const parentIndex = this.props.parentIndex;
        return (
            <div className="CheckBody">
          
                {
                    listItems.map((content, index)=> {
                        if(content.checked){
                            return (
                                <div className="CheckList" key={index} onClick={()=> this.checkItem(index,parentIndex)}><span>{content.item}
                                    <i className="CheckedBox"></i></span></div>)
                        } else {
                            return (
                                <div className="CheckList" key={index} onClick={()=> this.checkItem(index,parentIndex)}><span>{content.item}
                                    <i className="UnCheckedBox"></i></span></div>)
                        }
                    })
                }
                </div>
        )
    }

}


CheckList.propTypes = {
    listItems: PropTypes.array.isRequired,
    onCheckItem: PropTypes.func
};