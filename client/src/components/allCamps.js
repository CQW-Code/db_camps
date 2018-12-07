import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { setHeaders } from "../actions/headers";
import {
  Button,
  Card,
  //Container,
  Divider,
  //Dropdown,
  Header,
  Image
} from "semantic-ui-react";
import styled from "styled-components";
import { getCamps } from "../actions/camps";

class AllCamps extends React.Component {
  //map through camps db to display
  state = { camps: [{}] };

  // componentDidMount() {
  //   this.props.dispatch(getCamps());
  // }
  allCamps = () => {
    const { camps } = this.props;
    console.log({ camps });
    return camps.map(c => (
      <Card style={styles.cardStyle} key={c.id}>
        <h2>{c.name}</h2>
        {/* <StyledImage src={c.image} alt={`${c.title}  ${c.variety}`} /> */}
        <Card.Content>
          <Card.Header>
            {c.address1} <br />
            {c.address2} <br />
            {c.city}, {c.state} {c.zip}
          </Card.Header>
          <Divider />
          <Card.Header>
            {c.web_url ? (
              <StyledLink
                to={c.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.name}
              </StyledLink>
            ) : (
              <p>No website available.</p>
            )}
          </Card.Header>
        </Card.Content>
        <Link to={`/camps/${c.id}`}>
          <Button style={styles.btn} fluid color="teal">
            View Details
          </Button>
        </Link>
      </Card>
    ));
  };

  render() {
    return (
      <div>
        <Divider />
        <Header inverted color="teal" textAlign="center" size="huge">
          DeafBlind Camps/Retreats in the USA
        </Header>
        <Card.Group computer={8} mobile={2} tablet={4} centered>
          {this.allCamps()}
        </Card.Group>
      </div>
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

const mapStateToProps = state => {
  const { camps } = state;
  return { camps };
};

export default connect(mapStateToProps)(AllCamps);
