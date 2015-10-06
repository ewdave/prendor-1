/**
 * Created by ponty on 8/19/2015.
 */
var React = require("react");


var SliderComponent = React.createClass({

    render: function(){
        return (
            <div className="sliderComponent">
                {this.props.children}
                </div>
        );
    }


});

module.exports = SliderComponent;
