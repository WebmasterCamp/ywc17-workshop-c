import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Centered from "./shared/Layout/Centered/Centered";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import QuizPage from "./pages/QuizPage/QuizPage2";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import Content1Page from "./pages/Content1Page/Content1Page";
import Content2Page from "./pages/Content2Page/Content2Page";
import Content3Page from "./pages/Content3Page/Content3Page";

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
            <Route exact path="/content1">
              <Content1Page />
            </Route>
            <Route exact path="/content2">
              <Content2Page />
            </Route>
            <Route exact path="/content3">
              <Content3Page />
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
