import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button,
         Container,
         Divider,
         Grid,
         Segment,
        } from 'semantic-ui-react';


const ButtonLink = styled.a`
font-weight: bold;
font-size: 20px;
display: flex;
justify-content: space-around;
`

class Home extends Component {
  render() {
    return (

      <Segment basic style={ styles.mainContainer}>
      <ButtonLink>
        <Link to="/camps" style={styles.text}>Gallery of Camps/Resorts</Link>
        <Link to="/randomcamp" style={styles.text}>Gallery of Camps/Resorts</Link>
      </ButtonLink>
      <br/>
      <br/>
      <Container style={styles.middleContainer}>
        <Divider />
        <Grid>
          <Grid.Row centered columns={3}>
            <Grid.Column
              computer={8}
              mobile={16}
              tablet={8}>
              
              <h2>A Limited resource for DeafBlind</h2>
              <p>This is a work in progress in an effort to create
                a clearinghouse of sorts for users to look up Camps and
                Retreats geared to DeafBlind users of all ages. 
              </p>
            </Grid.Column>
            <Grid.Column
              computer={8}
              mobile={16}
              tablet={8}>
              <h2>Locations</h2>
              <p>Currently this app will start with locations
                in the United States only; more will be added
                in the future as I hope to expand this.
              </p>
            <Grid.Column
              computer={8}
              mobile={16}
              tablet={8}>
              
            </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid.Row centered columns={3}>
          <Grid.Column
            computer={8}
            mobile={16}
            tablet={8}>
          </Grid.Column>
        </Grid.Row>
      </Container>
      <Divider />
      </Segment>
    );
  }
}
  

const styles = {
  text: {
    color: 'yellow',
  },
  main: {
    color: "#FFF",
  },
  image: {
    alignSelf: "center",
  },
  middleContainer: {
    height:'fill',
    background: 'white',
    width: '100%',
    justifyContent: 'center',
  
  },
  
  appIcon:{
    width: '160px'
  },
  btns:{
    padding: '10px',
    width: '10vw',
    height: '5vh',
  },
}

    


export default Home;
