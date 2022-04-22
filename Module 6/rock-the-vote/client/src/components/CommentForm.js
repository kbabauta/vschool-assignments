import React from 'react'

export default function CommentForm() {
    return(
        <div className='comment-form-container'>
            <form>
                <input type="text">
                    Comment
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}