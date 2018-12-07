import React from "react";
import SocialMedia from "./SocialMedia";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";

class FooterBar extends React.Component {
  render() {
    return (
      <Segment inverted color="teal">
        <FooterContainer>
          <SocialMedia />
        </FooterContainer>
      </Segment>
    );
  }
}

const FooterContainer = styled.div`
  style={{ padding: '2em 0em', position:'absolute', bottom:'0', width:'100%'}}
`;

export default FooterBar;
