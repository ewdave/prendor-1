/**
 * Created by ponty on 8/22/2015.
 */

import React from 'react';
import ScrollArea from 'react-scrollbar';
require('./selectBox.css');
require('./../../../../../node_modules/react-scrollbar/dist/css/scrollbar.css');

var SelectBox = React.createClass({
    getInitialState(){
        return ({currentIndex: 0, showCustomBox: false})

    },
    getDefaultProps: function() {
        return {
            className: 'DropSelect'
        };
    },
    componentDidMount(){
        var domNode = React.findDOMNode(this.refs.select);
        document.addEventListener('click', function (e) {
            var index;
            var scrollANode = React.findDOMNode(this.refs.scrollA);
            if(scrollANode) {
               index = scrollANode.contains(e.target);
                if (e.target == domNode) {
                } else if (index) {
                }
                else {
                    this.hideCustomBox();
                }
            } else {

            }

        }.bind(this))
    },
    componentWillUnmount(){
        document.removeEventListener("click")
    },
    onItemClick(index){
        //console.log("clicked ")
        var activeIndex = this.state.currentIndex;
        var showCustomBox = this.state.showCustomBox;
        if (index != activeIndex) {
            this.selectActiveIndex(index);
            this.hideCustomBox();
        } else {
            if (!showCustomBox) {
          //      console.log(" should display")
                this.showCustomBox();
            } else {
                this.hideCustomBox();
            }
        }
    },
    showCustomBox(){
        this.setState({showCustomBox: true});
    },
    hideCustomBox(){
        this.setState({showCustomBox: false});
    },
    selectActiveIndex(index){
        this.setState({currentIndex: index});
    },
    render(){

        let list = this.props.listArray;
        let activeIndex = this.state.currentIndex;
        let showCustomBox = this.state.showCustomBox;
        let activeView;
        let shownView;
        let className = this.props.className;


        if (!showCustomBox) {
            activeView =
                <div className="ActiveLisItem" ref="select"
                     onClick={this.onItemClick.bind(this,activeIndex)}>{list[activeIndex].item}
                </div>;

        } else {
            activeView =
                <div className="ActiveLisItem" ref="select" onClick={this.onItemClick.bind(this,activeIndex)}>
                    {list[activeIndex].item}
                </div>;
            shownView = <ScrollArea
                speed={0.8}
                className="area"
                horizontal={false}
                > {
                list.map((content, index)=> {
                    if (index == activeIndex) {

                    } else {
                        return (
                            <div className="DeactiveListItem" key={index} onClick={this.onItemClick.bind(this,index)}>
                                {content.item}</div>)
                    }

                }) } </ScrollArea>;
        }
        return (
            <div className={className}>
                {
                    activeView
                }
                <div className="CustomSelectBox" ref="scrollA">
                    {shownView}

                </div>
            </div>

        )
    }
})


module.exports = SelectBox;

