import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import User from "layouts/User.js";

// views without layouts

import Landing from "views/Landing.js";
import { layouts } from "chart.js";


//import Profile from "views/Profile.js";  
//*moved profile to be viewed under the same auth bar for consistency



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/user" component={User} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      
      <Route path="/" exact component={Landing} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
