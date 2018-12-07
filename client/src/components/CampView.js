import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Divider } from "semantic-ui-react";
import styled from "styled-components";
import { updateCamp } from "../actions/camps";

class CampView extends React.Component {
  render() {
    const { camp = {} } = this.props;
    return (
      <Card centered style={styles.cardStyle}>
        <h2>{camp.name}</h2>
        {/* <StyledImage src={c.image} alt={`${c.title}  ${c.variety}`} /> */}
        <Card.Content>
          <Card.Header>
            {camp.address1} <br />
            {camp.address2} <br />
            {camp.city}, {camp.state} {camp.zip}
          </Card.Header>
          <Divider />
          <Card.Header>
            {camp.web_url ? (
              <StyledLink
                to={camp.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {camp.name}
              </StyledLink>
            ) : (
              <p>No website available.</p>
            )}
          </Card.Header>
        </Card.Content>
        <Link to={`/camps/`}>
          <Button style={styles.btn} fluid color="teal">
            Back to List
          </Button>
        </Link>
      </Card>
    );
  }
}

const styles = {
  text: {
    color: "#FFF"
  },
  scroller: {
    height: "80vh",
    overflow: "auto"
  },
  cardStyle: {
    // display: "block",
    width: "350px",
    overflow: "auto",
    backgroundColor: "lightgray"
  },

  btn: {
    height: "15vh",
    fontSize: "26px",
    color: "black"
  }
};

const StyledLink = styled.a`
  color: blue;
  &:hover {
    color: red;
  }
`;

const StyledImage = styled(Image)`
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
  height: 20vh !important;
  width: auto !important;
`;

const mapStateToProps = (state, props) => {
  return {
    camp: state.camps.find(c => c.id === parseInt(props.match.params.id))
  };
};

export default connect(mapStateToProps)(CampView);
