import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  users = () => {
    return this.props.users.map(user => {
      
      return <li>{user.username}, {user.hometown}</li>
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.users.length === 0 ?
            <p> Users!</p>
          :
          <div>
          {this.users()}
          
          {this.props.users.length}
            </div>
  }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Users)
