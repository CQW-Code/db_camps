import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            style= {styles.text}
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item 
            name='Register'
            style= {styles.text} />
        </Link>
        <Link to='/login'>
          <Menu.Item 
           name='Login'
           styles= {styles.text} />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item 
              name='home' 
              style={styles.text}/>
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  text: {
    color: "#FFF",
    fontSize: 20,
  },
  navbarWrap: {
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  },
  background: {
    backgroundColor: "black",
  },
  image: {
    textAlign: 'middle',
    height: '5%',
    width: '10%',
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
