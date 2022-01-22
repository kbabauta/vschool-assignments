// import { init } from "express/lib/application";
import React, {useState} from "react";

function BountyForm(props){
    const initBounty = {firstName: "", lastName: "", living: false, bountyPrice: 0, type:"???"}
    const [newBounty, setNewBounty] = useState(initBounty)

    function handleChange(e) {
        const {name, value, type, checked} = e.target
        type === "checkbox" ? setNewBounty(prevInfo => ({...prevInfo, [name]: checked})) : setNewBounty(prevInfo => ({...prevInfo, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(newBounty, props._id)
        setNewBounty(initBounty)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={newBounty.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={newBounty.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <label>
                Living?:
                <input type="checkbox" name="living" value={newBounty.living} onChange={handleChange} />
            </label>
            <input 
                type="number"
                name="bountyPrice"
                value={newBounty.bountyPrice}
                onChange={handleChange}
                placeholder="Bounty Price"
            />
            <select type="text" name="type" value={newBounty.type} onChange={handleChange}>
                <option value="">-Select an Option-</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select>
            <button className="addBtn">{props.buttonText}</button>
        </form>

    )


}

export default BountyForm