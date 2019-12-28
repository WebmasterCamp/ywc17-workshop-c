import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Centered from './shared/Layout/Centered/Centered';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import QuizPage from './pages/QuizPage/QuizPage2';
import SummaryPage from './pages/SummaryPage/SummaryPage';

import Navbar from './shared/UI/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Centered>
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
        </Centered>
      </>
    </Router>
  );
}