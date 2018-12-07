import React from "react";
import styled from "styled-components";
import { Button, Icon, Label, Segment } from "semantic-ui-react";

const SocialMedia = () => {
  return (
    <Segment inverted>
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
        <Icon name="copyright outline" size="large" style={styles.copy} />
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
    backgroundColor: "transparent",
    color: "white"
  },
  copy: {
    color: "white"
  }
};

export default SocialMedia;
