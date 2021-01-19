import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

    renderUsers(){
        return this.props.users.map( user => <li>{`${user.username} - ${user.hometown}`}</li>)
    }

  render() {
    return (
      <div>
        <ul>
          
          {this.props.userCount ? <p><b>{this.props.userCount}</b> Users!</p> : null}
          {this.props.users ? this.renderUsers() : null}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return {
        users: state.users,
        userCount: state.users.length,
    }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
