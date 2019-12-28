import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DashboardPage from './pages/DashboardPage/DashboardPage';
import QuizPage from './pages/QuizPage/QuizPage';
import SummaryPage from './pages/SummaryPage/SummaryPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/quiz">
            <QuizPage />
          </Route>
          <Route exact path="/summary">
            <SummaryPage />
          </Route>
          <Route exact path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}