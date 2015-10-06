/**
 * Created by ponty on 9/23/2015.
 */
var React = require('react');
import { Router, Route, Link,IndexRoute } from 'react-router'
import MainApp from './../app/components/MainApp';
var App = React.createClass({
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

var routes = (

    <Route component={App} path="/" onEnter={indexRender}>
        
    </Route>
);
module.exports = routes;
