/**
 * Created by ponty on 9/5/2015.
 */
import React,{findDomNode,Component,PropTypes} from 'react/addons';
import {Link} from 'react-router';


export default class DashBoardItem extends Component {

    constructor() {
        super();
    }

    render() {
        const text = this.props.headerTxt;
        const img_url = this.props.img_url;
        const listArray = this.props.listArray;

        return (

            <div className="DashBoardItem">
                <div className="DashBoardItemHeader">
                    <ul className="DashBoardItemHeaderList">
                        <li><img src={img_url} /></li>
                        <li><span className="DashBoardItemHeaderList DashBoardItemTitle">{text}</span></li>
                    </ul>
                </div>
                <div className="DashBoardBody">
                    {
                        listArray.map((content,index)=>{
                            return (
                                <div className="DashBoardBodyFull" key={content.itemName}>
                                   <Link to={content.component} activeClassName="active"
                                         params={content.urlParam}>{content.itemName}</Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )


    }

}

DashBoardItem.propTypes = {
    headerTxt : PropTypes.string.isRequired,
    img_url : PropTypes.string.isRequired,
    listArray : PropTypes.array.isRequired
}