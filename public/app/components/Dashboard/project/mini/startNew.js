/**
 * Created by ponty on 9/6/2015.
 */
import React,{findDomNode,Component,PropTypes} from 'react';
import SelectBox from './../../../Reusable/SelectBoxs/selectBox';
const array = [
    {item:2},
    {item:3},
    {item:4},
    {item:5},
    {item:6},
    {item:10},
    {item:8},
    {item:6}
];
import SkillSelection from './../../../Reusable/Accordion/skillSection';
export default class ProjectStartNew extends Component {

    render(){
        return (
            <div className="StartNewSection">
                <div className="full">
                    <div className="col-sm-1 hidden-xs hidden-md"></div>
                    <div className="col-md-6 col-sm-5">
                        <div className="FormNoAddon">
                            <div className="full">
                                <div className="full">
                                    <div className="col-md-1">
                                        <span className="FormHandle">Title</span>
                                    </div>
                                    <div className="col-md-11">
                                        <span><input type="text" className="FormControl"/></span>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="SkillSection">
                            <SkillSelection/>

                        </div>

                        <div className="full">
                            <div className="col-md-8">
                                    <span className="Location-span"><span className="blue"><i className="fa fa-map-marker"></i>  Location</span><span
                                        className="caret-lower"><i className="fa fa-caret-down"></i></span></span>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-1 col-sm-1">

                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="full">
                            <div className="col-md-11 col-md-11">
                                <div className="FormBox">
                                    <div className="head"><i className="fa fa-paperclip"></i><span>Attachments</span></div>

                                    <div className="attach-item">
                                        <div className="fileBox">
                                            <span>+</span>
                                        </div>
                                        <div className="action">
                                            LoremIpsumLactum.tact
                                            <div className="delete">
                                                <button className="btn">-</button>
                                                <span className="tooltip">delete</span>
                                            </div>

                                            <div className="progress-bar">
                                                <div className="progress-static"></div>
                                                <div className="progress"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="attach-item">
                                        <div className="fileBox">
                                            <span>+</span>
                                        </div>
                                        <div className="action">
                                            LoremIpsumLactum.tact
                                            <div className="delete">
                                                <button className="btn">-</button>
                                                <span className="tooltip">delete</span>
                                            </div>

                                            <div className="progress-bar">
                                                <div className="progress-static"></div>
                                                <div className="progress"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="attach-item">
                                        <div className="fileBox">
                                            <span>+</span>
                                        </div>
                                        <div className="action">
                                            LoremIpsumLactum.tact
                                            <div className="delete">
                                                <button className="btn">-</button>
                                                <span className="tooltip">delete</span>
                                            </div>

                                            <div className="progress-bar">
                                                <div className="progress-static"></div>
                                                <div className="progress"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="full">
                            <div className="col-md-11">
                                <div className="FormBox">
                                    <div className="head"><i className="fa fa-tags"></i><span>Price</span></div>
                                    <div>
                                            <span className="Span"><input type="text"
                                                                          placeholder="$300,000.00"/> / hour</span> <span
                                        className="Span"><input type="text" placeholder="$300,000.00"/> for duration</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full">
                            <div className="col-md-10">

                                <div className="Milestone">
                                    <span className="CheckBox"></span><span>Milestone</span><span><input type="text"
                                                                                                         placeholder="$300,000.00"/></span>
                                </div>
                            </div>
                        </div>

                        <div className="full">
                            <div className="col-md-11">
                                <div className="FormBox">
                                    <div className="start-d-title"><i className="fa fa-clock-o"></i> <span>Duration</span>
                                    </div>
                                    <div className="full">
                                        <div className="col-md-4 col-xs-4 col-sm-4">
                                            <div className="full">
                                                <div className="col-md-2 col-xs-2 col-sm-2"><span
                                                    className="circleBrown"></span></div>
                                                <div className="col-md-4 col-xs-3 col-sm-2">
                                                    <SelectBox listArray={array} className="DropSelect bottomUp"/>
                                                </div>
                                                <div className="col-md-1 hidden-xs hidden-sm">&nbsp;</div>
                                                <div className="col-md-2 col-xs-2 col-sm-2"><span className="start-d-mid">Days</span>
                                                </div>
                                                <div className="col-md-1 col-xs-2 col-sm-1">&nbsp;</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-4 col-sm-4">
                                            <div className="full">
                                                <div className="col-md-2 col-xs-2 col-sm-2"><span
                                                    className="circleBrown"></span></div>
                                                <div className="col-md-4 col-xs-3 col-sm-2">
                                                    <SelectBox listArray={array} className="DropSelect bottomUp"/>
                                                </div>
                                                <div className="col-md-1 hidden-xs hidden-sm">&nbsp;</div>
                                                <div className="col-md-2 col-xs-2 col-sm-2"><span className="start-d-mid">Weeks</span>
                                                </div>
                                                <div className="col-md-1 col-xs-2 col-sm-1">&nbsp;</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xs-4 col-sm-4">
                                            <div className="full">
                                                <div className="col-md-2 col-xs-2 col-sm-2"><span
                                                    className="circleBrown"></span></div>
                                                <div className="col-md-4 col-xs-3 col-sm-2">
                                                    <SelectBox listArray={array} className="DropSelect bottomUp"/>
                                                </div>
                                                <div className="col-md-1 hidden-xs hidden-sm">&nbsp;</div>
                                                <div className="col-md-2 col-xs-2 col-sm-2"><span className="start-d-mid">Months</span>
                                                </div>
                                                <div className="col-md-1 col-xs-1 col-sm-1">&nbsp;</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="full">
                            <div className="col-md-10">
                                <div className="PostProject">
                                    <div className="title">Post Project As</div>
                                    <div className="Milestone">
                                        <span className="CheckBox"></span><span>Team Name Should Be here</span>
                                    </div>
                                    <div className="Milestone">
                                        <span className="UnCheckBox"></span><span>Users Name Here</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="full">
                            <div className="col-md-6 col-xs-4 col-sm-6">

                            </div>
                            <div className="col-md-6 col-xs-6 col-sm-4">
                                <button className="Button">Post Project <i className="fa fa-pencil-square-o"></i></button>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
