import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./Home";
import AllCamps from "./AllCamps";
import CampView from "./CampView";
import { getCamps } from "../actions/camps";
import { Loader, Segment, Dimmer } from "semantic-ui-react";

class FetchCamps extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getCamps(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/camps" component={AllCamps} />
          <Route exact path="/camps/:id" component={CampView} />
        </div>
      );
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

export default connect()(FetchCamps);
