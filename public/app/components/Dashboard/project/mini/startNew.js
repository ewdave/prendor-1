/**
 * Created by ponty on 9/6/2015.
 */
import React,{findDomNode,Component,PropTypes} from 'react';
import SelectBox from './../../../Reusable/SelectBoxs/selectBox';
var ReactQuill = require('react-quill');
require('./../../../../../../node_modules/react-quill/node_modules/quill/dist/quill.snow.css');
import GeminiScrollbar from 'react-gemini-scrollbar';
import UploadBox from './../../../Reusable/FileUpload/fileUploadBox';
import axios from 'axios';

import SkillSelection from './../../../Reusable/Accordion/skillSection';
export default class ProjectStartNew extends Component {
    constructor() {
        super();
        this.state = {skills: [],
            dateTime: {mnths: 0, wks: 0, days: 0},
            desc: "Clear To Enter Description",
            urls:[],
            location:[]
        }

    }

    getFiles = (files)  =>{
        this.setState({urls:files})
    }

    submitProject = () => {
        const dateTime = this.state.dateTime;
        const desc = this.state.desc;
        const title = React.findDOMNode(this.refs.title).value;
        const lang = React.findDOMNode(this.refs.lang).value;
        /*
         use if only weeks n days is needed
         const weeks = React.findDOMNode(this.refs.weeks).value;
         const days = React.findDOMNode(this.refs.days).value;
         */
        const priceDur = React.findDOMNode(this.refs.priceDur).value;
        const priceHr = React.findDOMNode(this.refs.priceHr).value;
        const skills = this.state.skills;
        const urls = this.state.urls;
        const location = [];

        /**
         var title = req.body.title; *
         var language = req.body.lang; *
         var priceDur = req.body.priceDur; *
         var priceHr = req.body.priceHr; *
         var desc = req.body.desc; *
         var duration = req.body.dateTime; *
         var files = req.body.urls; *
         var skills = req.body.skills; *
         var locations = req.body.location; *
         *
         * */

        console.log({
            title: title,
            lang: lang,
            dateTime: dateTime,
            priceDur: priceDur,
            priceHr: priceHr,
            skills: skills,
            desc: desc,
            urls:urls,
            location:location
        });

        axios.post('api/startProject', {
            title: title,
            lang: lang,
            dateTime: dateTime,
            priceDur: priceDur,
            priceHr: priceHr,
            skills: skills,
            desc: desc,
            urls:urls,
            location:location
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    getSkill = (array) =>{
        this.setState({skills: array})
    }

    getDescription = (value) => {
        this.setState({desc: value})
    }

    durationChange = () => {
        const input_weeks = React.findDOMNode(this.refs.weeks).value;
        const input_days = React.findDOMNode(this.refs.days).value;


        let days = (input_days * 1) + (input_weeks * 7);

        let mnths = parseInt(days / 28);
        let wks = parseInt((days - (mnths * 28)) / 7);
        let dys = days - ((wks * 7) + (mnths * 28));
        this.setState({dateTime: {mnths: mnths, wks: wks, days: dys}})


    }

    render() {
        const dateTime = this.state.dateTime;
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
                                        <span><input type="text" className="FormControl" ref="title"/></span>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="full">
                            <div className="col-md-8">
                                <SkillSelection selectChange={this.getSkill}/>
                            </div>

                        </div>

                        <div className="full">
                            <div className="col-md-8">
                                        <span className="Location-span"><span className="blue"><i
                                            className="fa fa-map-marker"></i>  Location</span><span
                                            className="caret-lower"><i className="fa fa-caret-down"></i></span></span>
                            </div>
                        </div>

                        <div className="full">

                            <div className="start-new-des">
                                <div className="title">
                                    Description
                                </div>
                                <div>
                                    <ReactQuill
                                        value={this.state.desc}
                                        theme="snow"
                                        onChange={this.getDescription}
                                        />
                                </div>
                            </div>


                        </div>


                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-9 col-md-push-1 col-sm-push-1">
                        <div className="full">
                            <div className="col-md-11 col-sm-12">

                                <UploadBox
                                    uploadUrl="/api/upload"
                                    getFiles={this.getFiles}
                                    />

                            </div>
                        </div>

                        <div className="full">
                            <div className="col-md-11 col-sm-12">
                                <div className="FormBox">
                                    <div className="head"><i className="fa fa-tags"></i><span>Price</span></div>
                                    <div>
                                                <span className="Span">
                        <input type="text" placeholder="$300,000.00" ref="priceHr"/> / hour</span> 
                        <span className="Span">
                        <input type="text" placeholder="$300,000.00" ref="priceDur"/> for duration</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full">
                            <div className="col-md-10">

                                <div className="Milestone">
                                    <span className="CheckBox"></span><span>Language</span><span>
                                    <input type="text" placeholder="Enter Language" ref="lang"/></span>
                                </div>
                            </div>
                        </div>

                        <div className="full">
                            <div className="col-md-11 col-sm-12">
                                <div className="FormBox">
                                    <div className="start-d-title"><i className="fa fa-clock-o"></i>
                                        <span>Duration</span>
                                    </div>
                                    <div className="full">
                                        <div className="duration-comp">
                                            <div className="tags-list">
                                            <span className="tags">
                                            <input type="number" ref="weeks" onChange={this.durationChange}/>
                                            <i>Weeks</i>
                                            </span>
                                            <span className="tags">
                                            <input type="number" ref="days" onChange={this.durationChange}/>
                                            <i>Days</i>
                                            </span>
                                            </div>
                                            <div className="d-counter-box">

                                                <div className="d-counter"><i>{dateTime.mnths}</i> mths</div>
                                                <div className="d-counter"><i>{dateTime.wks}</i> wks</div>
                                                <div className="d-counter last"><i>{dateTime.days}</i> days</div>

                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="full">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <p className="post-project">
                                    <button className="Button" onClick={this.submitProject}>Post Project <i
                                        className="fa fa-pencil-square-o"></i></button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
