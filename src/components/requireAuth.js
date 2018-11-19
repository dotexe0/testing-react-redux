import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.checkIfLoggedIn()
    }

    componentDidUpdate() {
      this.checkIfLoggedIn()
    }

    checkIfLoggedIn() {
      if (!this.props.isLoggedIn) {
        this.props.history.push('/')
      }
    }
    
    render() {
      return <ChildComponent {...this.props} />
    }
  }
  const mapStateToProps = state => ({ isLoggedIn: state.auth })

  return connect(mapStateToProps)(ComposedComponent)
}
