import React, { Component } from 'react';
import {connect} from 'react-redux';



class Users extends Component {

 

  render() {

    let lis = this.props.users.map(user => <li>{user.username}</li>)

    

    return (
      <div>
        <ul>
          Users!
          {lis}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mSP=(state)=>{
  return (
   { users:state.users,
    userCount: state.users.length
   }
  )
}

// connect this component to Redux
export default connect(mSP)(Users)


// import React, { Component } from 'react';
// import { connect } from 'react-redux';



//   render() {
//     let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

//     return (
//       <div>
//         {this.props.numberOfUsers}
//         <ul>
//           {users}
//         </ul>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     users: state.users,
//     numberOfUsers: state.users.length
//   };
// };

// export default connect(mapStateToProps)(Users)