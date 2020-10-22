import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props.users)
    return (
      <div>
        {<h2>{this.props.users.length}</h2>}
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
