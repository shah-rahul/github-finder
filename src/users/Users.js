import React, { Component } from 'react';
import UserItem from './UserItem';

 class Users extends Component {
  state = {
    users: [
      {
        id: 'mojombo',
        login: '1',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: 'defunkt',
        login: '2',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
        id: 'pjhyett',
        login: '3',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        id: 'wycats',
        login: '3',
        avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
        html_url: 'https://github.com/wycats',
      },
    ],
  };
  render() {
    return <div style={userStyle}>
        {this.state.users.map(user => (
            <UserItem key={user.login} user={user}/> 
        ))}
    </div>;
  }
}

const userStyle ={
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'
}

export default Users;
