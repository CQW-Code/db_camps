import React from "react";
import styled from "styled-components";
import { Button, Icon, Label, Segment } from "semantic-ui-react";

const SocialMedia = () => {
  return (
    // <Segment style={styles.btn_socmed}>
    <Segment>
      <Button circular color="red">
        <Icon name="envelope" />
        Email
      </Button>

      <Button
        circular
        href="https://github.com/CQW-Code"
        target="_blank"
        color="green"
      >
        <Icon name="github" />
        GitHub
      </Button>

      <Button
        circular
        color="linkedin"
        href="https://www.linkedin.com/in/christopherqwatkin/"
        target="_blank"
      >
        <Icon name="linkedin" />
        LinkedIn
      </Button>

      <Label style={styles.label}>
        <Icon
          name="copyright outline"
          size="large"
          color="black"
          style={styles.copy}
        />
        FuzzDuckie Enterprise
      </Label>
    </Segment>
  );
};

const styles = {
  label: {
    fontSize: "24px",
    padding: "10px",
    marginBottom: "15px",
    float: "right",
    backgroundColor: "transparent"
  }
  // copy: {
  //   marginLeft: "315px"
  // }
};

export default SocialMedia;
