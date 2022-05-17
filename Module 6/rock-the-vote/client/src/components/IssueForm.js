import React, { useState } from 'react'

const initInputs = {
    title: "",
    description: ""
}

export default function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    const { title, description } = inputs
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input 
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
            />
            <button>{props.btnText}</button>
        </form>
    )

}






























// import React, { useState } from 'react' 

// const initInputs = {
//     title: "",
//     description: ""
// }

// export default function IssueForm(props) {
//     const [inputs, setInputs] = useState(initInputs)
//     const { addIssue } = props
    
//     function handleChange(e){
//         const { name, value } = e.target
//         setInputs(prevInputs => ({
//             ...prevInputs,
//             [name]: value
//         }))
//     }

//     function handleSubmit(e){
//         e.preventDefault()
//         addIssue(inputs)
//         setInputs(initInputs)
//     }

//     const { title, description } = inputs
//     return (
//         <div>
//             <form className='issue-form' onSubmit={handleSubmit}>
//                 <input 
//                     type="text"
//                     placeholder='Title'
//                     value={title}
//                     name="title"
//                     id='title'
//                     onChange={handleChange}
//                 />
//                 <textarea
//                     className='desc-input' 
//                     type="text"
//                     placeholder="Description"
//                     value={description}
//                     name="description"
//                     id='description'
//                     onChange={handleChange}
//                 />
//                 <button type='submit'>Post</button>
//             </form>
//         </div>
//     )
// }