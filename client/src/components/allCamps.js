import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setHeaders} from '../actions/headers';
import {
  Button,
  Card,
  //Container,
  //Dimmer,
  Divider,
  //Dropdown,
  Header,
  //Icon,
  Image,
  //Loader,
  //Menu,
  Responsive,
} from 'semantic-ui-react';
import styled from 'styled-components';
import {getCamps} from '../actions/camps';

class allCamps extends React.Component {

  state = { camps: []}

componentDidMount = () => {
  const {dispatch} = this.props;
  axios.get('api/camps')
    .then(res => {
      this.setState({camps: res.data})
      dispatch(setHeaders(res.headers))
      dispatch(getCamps(res.camps));
      console.log(res)
    })
}

allCamps = () => {
  const { camps } = this.state;
  const {user} = this.props;

  return camps.map( c =>
        <Card style={styles.cardStyle} key={c.id}>
          <h2>{c.name}</h2>
          <StyledImage src={c.image} alt={`${c.title}  ${c.variety}`}/>
          <Card.Content>
            <Card.Header>
              {c.address}
            </Card.Header>
            <Divider hidden />
            <Card.Header>
              {c.city}, {c.state}  {c.zip}
            </Card.Header>
            <Divider />
            <Card.Header>
              {c.web_url}
            </Card.Header>
          </Card.Content>
          <Responsive as="Image" minWidth={1000}>
            <Link to= {`/camps/${c.id}`}>
              <Button
                fluid
                color='teal'>
                View Camp Details
              </Button>
            </Link>
          </Responsive>
        </Card>  
      )}

render() {
  
  return (
    <div>

      <Divider />
        <Header
            inverted color = 'teal'
            textAlign='center'
            size='huge'>
              DeafBlind Camps/Retreats in the USA
          </Header>
        <Card.Group
          computer={8}
          mobile={2}
          tablet={4}
          centered>
          {this.allCamps()}
        </Card.Group>
    </div>
    )
  }
}

const styles = {
  text: {
    color: "#FFF",
  },
  scroller: {
    height: '80vh',
    overflow:'auto'
  },
  cardStyle: {
    display: 'block',
  },
}

const StyledImage = styled(Image)`
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
  height: 20vh !important;
  width: auto !important;
`

const mapStateToProps = (state, props) => {

  return {
    camps: state.camps,
    camp: state.camp,
    
  }
}

export default connect(mapStateToProps)(allCamps);

