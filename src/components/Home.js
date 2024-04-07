/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='homeBody'>
        <div className='topHome'>
          <img src="https://picsum.photos/200/200" alt="bank"/>

          <h1 id='homeheader'>Bank of React</h1>
        </div>
        <div className='homeRedirects'>
          <Link className="homeLink" to="/userProfile">User Profile</Link>
          <br/>
          <Link className="homeLink" to="/login">Login</Link>
          <br/>
          <Link className="homeLink" to="/credits">Credits</Link>
          <br/>
          <Link className="homeLink" to="/debits">Debits</Link>
          <br/><br/>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
      </div>
    );
  }
}

export default Home;