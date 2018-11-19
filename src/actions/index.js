import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export async function fetchComments() {
  const res = await axios.get('http://jsonplaceholder.typicode.com/comments')
  console.log('res', res)
  return {
    type: FETCH_COMMENTS,
    payload: res
  }
}
