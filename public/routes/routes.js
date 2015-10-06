/**
 * Created by ponty on 9/23/2015.
 */
var React = require('react');
import { Router, Route, Link,IndexRoute } from 'react-router'
import DashBoard from './../app/components/Dashboard/dashBoard';
import NewsFeed from './../app/components/Dashboard/NewsFeed/newsFeed';
import WorkSection from './../app/components/Dashboard/Work/work';
import BrowseWork from './../app/components/Dashboard/Work/mini/browseWork'
import AutoBid from './../app/components/Dashboard/Work/mini/autoBid'
import ProjectSection from './../app/components/Dashboard/project/project';
import ProjectIssuedOut from './../app/components/Dashboard/project/mini/projectIssuedOut';
import ProjectIssuedIn from './../app/components/Dashboard/project/mini/projectIssuedIn';
import ProjectStartNew from './../app/components/Dashboard/project/mini/startNew';
import LogoutPage from './../app/components/Dashboard/logout';
import ProjectDetails from './../app/components/Dashboard/Details/ProjectDetails/projectDetails';
import ProfilePage from './../app/components/Dashboard/Details/Profiles/profilePage';
import indexRender from './../app/components/Index/auth';
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

    <Route component={DashBoard} path="/" onEnter={indexRender}>
        <Route component={WorkSection}  path="/work/">
                <Route component={BrowseWork} path=":name/browse"/>
                <Route component={AutoBid} path=":name/autobid"/>
            </Route>
        <Route component={ProjectSection}  path="/projects/">
                <Route component={ProjectStartNew} path=":name/startnew"/>
                <Route component={ProjectIssuedOut} path=":name/issuedOut"/>
                <Route component={ProjectIssuedIn} path=":name/issuedIn"/>
            </Route>
        <IndexRoute component={NewsFeed} />
        
    </Route>
);
module.exports = routes;
