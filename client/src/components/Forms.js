// import React from 'react'
// import RegisterForm from '../components/RegisterForm'
// import LoginForm from '../components/LoginForm'

// class Forms extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleCreateClick = this.handleCreateClick.bind(this)
//     this.handleLoginClick = this.handleLoginClick.bind(this)
//     this.state = { newUser: false }
//   }

//   handleCreateClick() {
//     this.setState({ newUser: true })
//     return <RegisterForm />
//   }

//   handleLoginClick() {
//     this.setState({ newUser: false })
//   }

//   render() {
//     const newUser = this.state.newUser
//     let createButton
//     let loginButton

//     if (newUser) {
//       createButton = <RegisterForm />
//     } else {
//       loginButton = <LoginForm onClick={this.handleCreateClick} />
//     }

//     return (
//       <div>
//         {createButton}
//         {loginButton}
//       </div>
//     )
//   }
// }

// export default Forms
