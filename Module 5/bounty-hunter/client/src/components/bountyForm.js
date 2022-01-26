import React, {useState} from "react";

export default function BountyForm(props){
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        living: props.living ? true : false, 
        bounty: props.bounty || "", 
        bountyType: props.bountyType || ""
    }
    const [input, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(input, props._id)
        setInputs(initInputs)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="bountyForm">
                <input 
                    type="text" 
                    name="firstName" 
                    value={input.firstName} 
                    onChange={handleChange} 
                    placeholder="-First Name-"
                    autoComplete="off"
                />
                <input 
                    type="text" 
                    name="lastName" 
                    value={input.lastName} 
                    onChange={handleChange} 
                    placeholder="-Last Name-"
                    autoComplete="off"
                />
                <input 
                    type="number" 
                    name="bounty" 
                    value={input.bounty} 
                    onChange={handleChange} 
                    placeholder="Price"
                    autoComplete="off"
                />
                <select type="text" name="bountyType" value={input.bountyType} onChange={handleChange} placeholder="Bounty Type">
                    <option value="">-Affiliation-</option>
                    <option value="Jedi">Jedi</option>
                    <option value="Sith">Sith</option>
                    <option value="Rebel">Rebel</option>
                    <option value="Empirial">Imperial</option>
                    <option value="Other">Other</option>
                </select>
                <select type="text" name="status" value={input.status} onChange={handleChange}>
                    <option value=''>-Select Status-</option>
                    <option value='Alive'> Alive </option>
                    <option value='Dead'> Dead </option>

                </select>
                <button id="formButton"><span className="buttonText">{props.btnText}</span></button>
            </form>
        </div>
    )
}