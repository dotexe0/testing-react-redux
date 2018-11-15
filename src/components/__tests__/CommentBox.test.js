import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapped
beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', { 
    target: { name: 'comment', value: 'new comment' } 
  })
  wrapped.update() // simulate re-render
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

it('submits the input and empties the textarea', () => {
  wrapped.find('textarea').simulate('change', {
    target: {name: 'comment', value: 'i want to submit this'}
  })
  wrapped.update()
  // check that textarea has been updated
  expect(wrapped.find('textarea').prop('value')).toEqual('i want to submit this')
  wrapped.find('form').simulate('submit')
  wrapped.update()
  // check that form is reset
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})
