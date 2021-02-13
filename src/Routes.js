// This file is exported to src/App.js
// React required
import React from "react";
import { Route, Switch } from "react-router-dom";
// Containers - Pages
import Home from "./containers/Home";  
import Login from "./containers/Login";   
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";    
import PostNew from "./containers/PostNew";
import PostEdit from "./containers/PostEdit";
import Dashboard from "./containers/Dashboard";
import PostFilter from "./containers/PostFilter";
import PostView from "./containers/PostView"; 
import ResetPassword from "./containers/ResetPassword"; 
import SignupConfirmation from "./containers/SignupConfirmation";
// Components
import AppliedRoute from "./components/AppliedRoute";
// -------------- Application Begins Bellow ------------ //

const url = "/larissa-app-client-preview";

export default function Routes({ appProps }) {

    

    return (
        <Switch>

            { /* AppliedRoute - Public & Private accessible links - Start */ }
            <AppliedRoute path={`${url}/`} exact component={Home} appProps={appProps} />    
            <AppliedRoute path={`${url}/filter/:name`} component={PostFilter} appProps={appProps} />   
            <AppliedRoute path={`${url}/view/:id`} component={PostView} appProps={appProps} />    
            <AppliedRoute path={`${url}/login`} component={Login} appProps={appProps} />
            <AppliedRoute path={`${url}/register`} component={Register} appProps={appProps} />
            <AppliedRoute path={`${url}/reset`} component={ResetPassword} appProps={appProps} />
            <AppliedRoute path={`${url}/confirmation`} component={SignupConfirmation} appProps={appProps} />  
            <AppliedRoute path={`${url}/postnew`} component={PostNew} appProps={appProps} />
            <AppliedRoute path={`${url}/dashboard`} component={Dashboard} appProps={appProps} />
            <AppliedRoute path={`${url}/postedit/:id`} component={PostEdit} appProps={appProps} />  
            { /* AppliedRoute - Public & Private accessible links - End */ }

            { /* 404 Page - Start */ }
            <Route component={NotFound} />
            { /* 404 Page - End */}

        </Switch>
    );
}

export { url };