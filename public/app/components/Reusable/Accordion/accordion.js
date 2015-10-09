/**
 * Created by ponty on 9/14/2015.
 */
import React,{Component} from "react/addons";
require("./accordion.scss");
//Accordion Main

/**
 * set default props as active, allow parent to hold accordion list item
 *
 * */
export default class Accordion extends Component {

    constructor(){
        super();
        this.state = {activeIndex:0};
    }

    changeActiveAccordion = (index) => {
        this.setState({activeIndex:index});
    }
    render(){
        const children = this.props.childArray;
        const activeIndex = this.state.activeIndex;
        const items = React.Children.map(this.props.children,(child,index)=>{
            if(index == activeIndex){
                return React.addons.cloneWithProps(child, {
                    activeClass: "Accordion-Main active",
                    setActive: () => this.changeActiveAccordion(index),
                    isActive:true
                })
            } else {
                return React.addons.cloneWithProps(child, {
                    activeClass: "Accordion-Main",
                    setActive: () => this.changeActiveAccordion(index),
                    isActive:false
                })
            }
        });
        return(

                    <div className="Accordion">

                        {
                          items
                        }

                    </div>



        )
    }
}