    /**
     * Created by ponty on 9/6/2015.
     */
    import React,{findDomNode,Component,PropTypes} from 'react';
    import SelectBox from './../../../Reusable/SelectBoxs/selectBox';
    var ReactQuill = require('react-quill');
    require('./../../../../../../node_modules/react-quill/node_modules/quill/dist/quill.snow.css');
    import GeminiScrollbar from 'react-gemini-scrollbar';
 
    import SkillSelection from './../../../Reusable/Accordion/skillSection';
    export default class ProjectStartNew extends Component {
        constructor(){
            super();
            this.state = {skills:[],dateTime:{mnths:0,wks:0,days:0},desc:"Clear To Enter Description"}

        }

        getInputs = () => {
            const dateTime = this.state.dateTime;
            const desc = this.state.desc;
            const title = React.findDOMNode(this.refs.title).value;
            const milestone = React.findDOMNode(this.refs.milestone).value;
            /*
            use if only weeks n days is needed
            const weeks = React.findDOMNode(this.refs.weeks).value;
            const days = React.findDOMNode(this.refs.days).value;
            */
            const priceDur = React.findDOMNode(this.refs.priceDur).value;
            const priceHr = React.findDOMNode(this.refs.priceHr).value;
            const skills = this.state.skills;


            console.log({
                title:title,
                milestone:milestone,
                month:dateTime.mnths,
                weeks:dateTime.wks,
                days:dateTime.days,
                priceDur:priceDur,
                priceHr:priceHr,
                skills:skills,
                desc:desc
            })
        }

        getSkill(array){
            this.setState({skills:array})
        }

        getDescription = (value) => {
            this.setState({desc:value})
        }

        durationChange = () => {
            const input_weeks = React.findDOMNode(this.refs.weeks).value;
            const input_days = React.findDOMNode(this.refs.days).value;


            let days  = (input_days * 1) + (input_weeks * 7);

             let mnths = parseInt(days/28);
             let wks = parseInt((days - (mnths * 28)) / 7);
             let dys = days - ((wks * 7) + (mnths * 28));
             this.setState({dateTime:{mnths:mnths,wks:wks,days:dys}})

         
        }

        render(){
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
                        <div className="SkillSection">
                            <SkillSelection selectChange={() => this.getSkill}/>

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
                            <ReactQuill value={this.state.desc} theme="snow" onChange={this.getDescription}/>
                            </div>
                        </div>
                        

                        </div>

                       
                   

                    </div>

                    

                    <div className="col-md-4 col-sm-4 col-xs-9 col-md-push-1 col-sm-push-1">
                        <div className="full">
                            <div className="col-md-11 col-sm-12">
                                <div className="FormBox attach">
                                  <div className="head">
                                 <i className="fa fa-paperclip"></i>
                                 <span>Attachments</span><span className="blue">20</span> files</div>

                               <div className="attach-list">
                                <GeminiScrollbar>
                                <div className="attach-item">
                                        <div className="fileBox">
                                            +
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
                                            +
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
                                            +
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
                                            +
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
                                            +
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
                                            +
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
                                            +
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
                                            +
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


                                </GeminiScrollbar>
                               </div>
                                   </div>
                                
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
                                    <span className="CheckBox"></span><span>Milestone</span><span>
                                    <input type="text" placeholder="$300,000.00" ref="milestone"/></span>
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
                           <p className="post-project"><button className="Button" onClick={this.getInputs}>Post Project <i className="fa fa-pencil-square-o"></i></button></p>
                           </div>
                        </div>
                    </div>
                </div>

 

            </div>
            )
        }
    }
