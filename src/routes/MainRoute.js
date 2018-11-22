import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import IssueNotification from '../components/IssueNotification';
import ConfigAppParameters from '../components/ConfigAppParameters'; 
import Register from '../components/Register';
import Authorize from '../components/Authorize';
import ConfigSystemSettings from '../components/ConfigSystemSettings';
import Accounting from '../components/Accounting';
import PromotionManagement from '../components/PromotionManagement';
import EmailSubscriber from '../components/EmailSubscriber';
import Analytics from '../components/Analytics';
import FraudManagement from '../components/FraudManagement';


const MainRoute = () => (
  <main>
    <Switch>
          <Route path="/issuenotification" component={IssueNotification} />
          <Route path="/configappparameters" component={ConfigAppParameters} />
          <Route path="/register" component={Register} />
          <Route path="/authorize" component={Authorize} />
          <Route path="/configsystemsettings" component={ConfigSystemSettings} />
          <Route path="/accounting" component={Accounting} />
          <Route path="/promotionmanagement" component={PromotionManagement} />
          <Route path="/emailsubscriber" component={EmailSubscriber} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/fraudmanagement" component={FraudManagement} />
          
          <Route path="/" component={Dashboard} /> 
    </Switch>
  </main>
);

export { MainRoute };
