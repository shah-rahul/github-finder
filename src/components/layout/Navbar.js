import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Navbar extends Component {
  static defaultProps = {
    title: 'github finder',
    icon: 'fab fa-github',
  };
  
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
