import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Centered from "./shared/Layout/Centered/Centered";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import QuizPage from "./pages/QuizPage/QuizPage2";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

import Navbar from "./shared/UI/Navbar/Navbar";
import Footer from "./shared/UI/Footer/Footer";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Centered>
          <Switch>
            <Route exact path="/quiz/:currentQuestionNumber">
              <QuizPage />
            </Route>
            <Route exact path="/summary">
              <SummaryPage />
            </Route>
            <Route exact path="/">
              <DashboardPage />
            </Route>
            <Route path="*">
              <DashboardPage />
            </Route>
          </Switch>
        </Centered>
        {/* <Footer /> */}
      </>
    </Router>
  );
}
