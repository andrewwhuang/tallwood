import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import WhatPage from "views/WhatPage/WhatPage.js";
import TeamPage from "views/TeamPage/TeamPage.js";
import StakeholderPage from "views/StakeholderPage/StakeholderPage.js";
import ResearchPage from "views/ResearchPage/ResearchPage.js";
import LegalPage from "views/LegalPage/LegalPage.js";
import HiringPage from "views/HiringPage/HiringPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />

      <Route path="/what-page" component={WhatPage} />
      <Route path="/team-page" component={TeamPage} />
      <Route path="/research-page" component={ResearchPage} />
      <Route path="/legal-page" component={LegalPage} />
      <Route path="/hiring-page" component={HiringPage} />
      <Route path="/stakeholder-page" component={StakeholderPage} />

      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="*" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
