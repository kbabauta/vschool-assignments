import React from 'react'

export default function Comment() {
  return (
    <div className='comment'>
        <h4>@{props.username} said "{props.comment}"</h4>
        <button onClick={() => props.deleteComment(props._id)}>Delete Comment</button>
    </div>
  )
}
