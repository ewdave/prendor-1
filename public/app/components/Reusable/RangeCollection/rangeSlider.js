/**
 * Created by ponty on 9/8/2015.
 */
import React,{Component,findDOMNode,PropTypes} from 'react';
require('./rangecollection.css');
export default class RangeSlider extends Component {

    constructor(){
        super();
        this.state = {priceMin:0,priceMax:0}
    }
    componentDidMount(){
        let slider = findDOMNode(this.refs.ran);
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: false,
            step:2,
            range: {
                'min': 0,
                'max': 100
            }
        });

        let self = this;
        slider.noUiSlider.on('update', function(){
            let updateVal = slider.noUiSlider.get();
            let minPrice = +(updateVal[0] * 10).toFixed(2);
            let maxPrice = +(updateVal[1] * 10).toFixed(2);
            self.setState({priceMin:minPrice,priceMax:maxPrice})

        })
    }


    render(){
        let priceMin =  this.state.priceMin;
        let priceMax = this.state.priceMax;
        let title = this.props.title;
        return(
            <div className="RangeCollection">

                <div className="text">
                    <span className="price">{priceMin}$ - {priceMax}$</span>
                </div>
                <div ref="ran" id="range">
                </div>
                <div className="text">
                    {title}
                </div>
            </div>
        )
    }
}

RangeSlider.propTypes = {
    title:PropTypes.string.isRequired
}
