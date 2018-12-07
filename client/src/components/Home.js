import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import styled from "styled-components";
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";
import FetchCamps from "./FetchCamps";

class Home extends Component {
  render() {
    return (
      //can't figure out why the grey section is not flush
      //with the edge of screen?
      <Segment basic style={styles.main}>
        <Header style={styles.hdr}>DeafBlind Resources</Header>
        <Button style={styles.btn_link}>
          <Link to="/camps" style={styles.text}>
            Camps/Resorts
          </Link>
        </Button>
        <Divider hidden />
        <Button style={styles.btn_link}>
          Conferences/Workshops (Coming soon)
        </Button>
        <Divider hidden />
        <Button style={styles.btn_link}>
          Miscellaneous Resources (Coming soon)
        </Button>
        <Divider hidden />
        <Button style={styles.btn_link}>
          <Link to="/randomcamp" style={styles.text}>
            Feeling Lucky- random selection! (Coming soon)
          </Link>
        </Button>
      </Segment>
    );
  }
}

const styles = {
  hdr: {
    color: "navy",
    textAlign: "center",
    fontSize: "4em"
  },

  text: {
    color: "yellow"
  },

  image: {
    alignSelf: "center"
  },
  main: {
    height: "fill",
    background: "gray",
    // color: "black",
    width: "100%"
  },

  btn_link: {
    backgroundColor: "black",
    fontSize: "2em",
    color: "yellow",
    border: "solid 3px yellow",
    width: "400px",
    padding: "20px",
    marginLeft: "250px",
    marginRight: "450px"
  }
};

export default connect()(Home);
