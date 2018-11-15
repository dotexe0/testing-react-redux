import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.saveComment(this.state.comments)
    this.setState({ comment: '' })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea name="comment" onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox)
