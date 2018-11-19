import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }
  
  //component just got rendered
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
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea name="comment" onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comment</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.auth })

export default connect(mapStateToProps, actions)(CommentBox)
