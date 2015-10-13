/**
 * Created by ponty on 9/6/2015.
 */
import React,{findDomNode,Component,PropTypes} from 'react/addons';
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import ProjectItem from './../../../Reusable/ProjectItem/projectItem';
import RangeSlider from './../../../Reusable/RangeCollection/rangeSlider';
import GeminiScrollbar from 'react-gemini-scrollbar';
import SkillSelection from './../../../Reusable/Accordion/skillSection'

const pObj = [
    {
        pID: 1022920,
        pTitle: "First Item In the List Here",
        bidCount: 200,
        skillArray: [{skill: "Photoshop"}, {skill: "illustrator"}],
        startDate: 28042015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 102920,
        pTitle: "Web Design Job",
        bidCount: 2002839,
        skillArray: [{skill: "Php"}, {skill: "Nodejs"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 2022920,
        pTitle: "Web Design Job",
        bidCount: 200030,
        skillArray: [{skill: "Photoshop"}, {skill: "Corel Draw X7"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 100120,
        pTitle: "Android App Dev",
        bidCount: 2000,
        skillArray: [{skill: "android development"}],
        startDate: 28052015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },

    {
        pID: 1022920,
        pTitle: "Web Banner Design",
        bidCount: 200,
        skillArray: [{skill: "Photoshop"}, {skill: "illustrator"}],
        startDate: 28042015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 102920,
        pTitle: "Web Design Job",
        bidCount: 2002839,
        skillArray: [{skill: "Php"}, {skill: "Nodejs"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 2022920,
        pTitle: "Web Design Job",
        bidCount: 200030,
        skillArray: [{skill: "Photoshop"}, {skill: "Corel Draw X7"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 100120,
        pTitle: "Android App Dev",
        bidCount: 2000,
        skillArray: [{skill: "android development"}],
        startDate: 28052015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },

    {
        pID: 1022920,
        pTitle: "Web Banner Design",
        bidCount: 200,
        skillArray: [{skill: "Photoshop"}, {skill: "illustrator"}],
        startDate: 28042015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 102920,
        pTitle: "Web Design Job",
        bidCount: 2002839,
        skillArray: [{skill: "Php"}, {skill: "Nodejs"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 2022920,
        pTitle: "Web Design Job",
        bidCount: 200030,
        skillArray: [{skill: "Photoshop"}, {skill: "Corel Draw X7"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 100120,
        pTitle: "Android App Dev",
        bidCount: 2000,
        skillArray: [{skill: "android development"}],
        startDate: 28052015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 1022920,
        pTitle: "Web Banner Design",
        bidCount: 200,
        skillArray: [{skill: "Photoshop"}, {skill: "illustrator"}],
        startDate: 28042015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 102920,
        pTitle: "Web Design Job",
        bidCount: 2002839,
        skillArray: [{skill: "Php"}, {skill: "Nodejs"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 2022920,
        pTitle: "Web Design Job",
        bidCount: 200030,
        skillArray: [{skill: "Photoshop"}, {skill: "Corel Draw X7"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 100120,
        pTitle: "Android App Dev",
        bidCount: 2000,
        skillArray: [{skill: "android development"}],
        startDate: 28052015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },

    {
        pID: 1022920,
        pTitle: "Web Banner Design",
        bidCount: 200,
        skillArray: [{skill: "Photoshop"}, {skill: "illustrator"}],
        startDate: 28042015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 102920,
        pTitle: "Web Design Job",
        bidCount: 2002839,
        skillArray: [{skill: "Php"}, {skill: "Nodejs"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 2022920,
        pTitle: "Web Design Job",
        bidCount: 200030,
        skillArray: [{skill: "Photoshop"}, {skill: "Corel Draw X7"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 100120,
        pTitle: "Android App Dev",
        bidCount: 2000,
        skillArray: [{skill: "android development"}],
        startDate: 28052015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },

    {
        pID: 1022920,
        pTitle: "Web Banner Design",
        bidCount: 200,
        skillArray: [{skill: "Photoshop"}, {skill: "illustrator"}],
        startDate: 28042015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 102920,
        pTitle: "Web Design Job",
        bidCount: 2002839,
        skillArray: [{skill: "Php"}, {skill: "Nodejs"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 2022920,
        pTitle: "Web Design Job",
        bidCount: 200030,
        skillArray: [{skill: "Photoshop"}, {skill: "Corel Draw X7"}],
        startDate: 28032015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    },
    {
        pID: 100120,
        pTitle: "Last Item In the List Here",
        bidCount: 2000,
        skillArray: [{skill: "android development"}],
        startDate: 28052015,
        projectPrice: 40000,
        holderDp: "http://localhost:63342/React-Starter/prendor/.002/dashboard/testDp/lady-gaga.jpg",
        holderDetails: [{
            key: "N",
            value: "Aregbede Ayomide"
        }, {
            key: "C",
            value: "Nigeria"
        }, {
            key: "T",
            value: "PontySoft"
        }
        ]


    }
];




export default class BrowseWork extends Component {

    render() {
        var divStyle = {
            marginBottom: '15px',
            width: '190px'
        };

        return (
            <div className="BidPlatform">
                <div className="SearchActivity">
                    <div className="Inline-form first">
                        <div className="full">
                            <div className="col-md-6 col-xs-10">
                            <div className="title"><i className="fa fa-search"></i> Search</div>
                                <span className="FormAddon">
                                <input type="text" placeholder="Search Project"
                                                                   style={divStyle}/></span>
                            </div>
                            <div className="col-md-6 col-xs-10">
                            <div className="title"><i className="fa fa-clock-o"></i> Duration</div>
                             <div className="duration-comp">
                                       <span className="tags">
                                            <input type="number" ref="weeks"/>
                                            <i>Weeks</i>
                                            </span>
                                            <span className="tags">
                                            <input type="number" ref="days"/>
                                            <i>Days</i>
                                            </span>
                                        
                                        </div>
                            </div>
                        </div>
                    </div>
                <RangeSlider title="Avg Hourly Price" />
                    <RangeSlider title="Avg Price" />
                    <div className="Inline-form">
                    <div className="full">
                        <div className="col-md-6 col-sm-6 col-xs-10">
                            <div className="SkillSection">
                            <SkillSelection/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-10">
                            <span className="Location-span"><span className="blue"><i className="fa fa-map-marker"></i>  Location</span><span
                                            className="caret-lower"><i className="fa fa-caret-down"></i></span></span>
                        </div>
                        
                    </div>

                 </div>


                    <div className="locale-search">
                    <span><i className="fa fa-language"></i>Locale</span>
                    <span className="FormAddon"><input type="text" placeholder="Locale" style={divStyle}/></span>
                    </div>





                </div>

                <div className="BySkill">
                    <div className="full start-left">

                        <ReactCSSTransitionGroup transitionAppear={true} transitionName="project">
                            {
                                pObj.map((content, index)=> {
                                    return (
                                        <div className="col-md-3 col-xs-9 col-sm-4" key={index}>
                                            <ProjectItem projectObj={content}/>
                                        </div>
                                    )
                                })
                            }
                        </ReactCSSTransitionGroup>
                    </div>

                </div>


            </div>  )
    }
}
