    /**
     * Created by ponty on 9/6/2015.
     */
    import React,{findDomNode,Component,PropTypes} from 'react';
    import SelectBox from './../../../Reusable/SelectBoxs/selectBox';
    var ReactQuill = require('react-quill');
    require('./../../../../../../node_modules/react-quill/node_modules/quill/dist/quill.snow.css');
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
                <div className="full start-left">
                  
                    <div className="col-md-6 col-sm-5 col-xs-9">
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

                        <div className="full">
                        
                        <div className="start-new-des">
                            <div className="title">
                                    Description
                            </div>
                            <div>
                            <ReactQuill value="love them like jesus" theme="snow"/>
                            </div>
                        </div>
                        

                        </div>

                       
                   

                    </div>

                    

                    <div className="col-md-4 col-sm-4 col-xs-10 col-md-push-1 col-sm-push-1">
                        <div className="full">
                            <div className="col-md-11 col-sm-12">
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
                            <div className="col-md-11 col-sm-12">
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
                            <div className="col-md-11 col-sm-12">
                                <div className="FormBox">
                                    <div className="start-d-title"><i className="fa fa-clock-o"></i> <span>Duration</span>
                                    </div>
                                    <div className="full">
                                        <div className="duration-comp">
                                          <div className="tags-list">
                                            <span className="tags">
                                            <input type="number" />
                                            <i>Weeks</i>
                                            </span>
                                            <span className="tags">
                                            <input type="number" />
                                            <i>Days</i>
                                            </span>
                                          </div>
                                            <div className="d-counter-box">

                                                <div className="d-counter"><i>1</i> mths</div>
                                                <div className="d-counter"><i>3</i> wks</div>
                                                <div className="d-counter last"><i>5</i> days</div>

                                            </div>
                                        </div>


                                    </div>




                                </div>
                            </div>
                        </div>
                        <div className="full">
                           <div className="col-md-6"></div>
                           <div className="col-md-6">
                           <p className="post-project"><button className="Button">Post Project <i className="fa fa-pencil-square-o"></i></button></p>
                           </div>
                        </div>
                    </div>
                </div>

 

            </div>
            )
        }
    }
