import React from "react";
import { Switch, Route } from "react-router-dom";
import Flash from "./Flash";
import { Segment } from "semantic-ui-react";
import NavBar from "./NavBar";
import Home from "./Home";
import FetchCamps from "./FetchCamps";
import AllCamps from "./AllCamps";
import CampView from "./CampView";
import NoMatch from "./NoMatch";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />>
        <Switch>
          <Route exact path="/" component={(Home, FetchCamps)} />
          <Route exact path="/camps" component={(FetchCamps, AllCamps)} />
          <Route exact path="/camps/:id" component={CampView} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: "black"
  }
};

export default App;
