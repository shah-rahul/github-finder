import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('please eneter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form action='' className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='SEARCH USERS.....'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            CLEAR
          </button>
        )}
      </div>
    );
  }
}

export default search;
