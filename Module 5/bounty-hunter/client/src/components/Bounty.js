import React, {useState} from "react";
import BountyForm from "./bountyForm";

function Bounty(props){
    const [editButton, setEditButton] = useState(false)

    return(
        <div className="bounty">
            { !editButton ? 
                <>
                    <h3>{props.bountyInfo.firstName} {props.bountyInfo.lastName}</h3>
                    <p>The {props.bountyInfo.type} is wanted {props.bountyInfo.living ? "Alive" : "Dead"}</p>
                    <p>Payment will be {props.bountyInfo.bountyPrice}cr</p>
                    <button className="editBtn" onClick={() => setEditButton(editButton ? false : true)}>Edit</button>
                    <button className="deleteBtn" onClick={() => props.deleteBounty(props.bountyInfo._id)}>Delete</button>
                </>
                
                :

                <>
                    <BountyForm
                        _id={props.bountyInfo._id}
                        buttonText="Save"
                        submit={props.editBounty}
                    />
                </>
        
        }
        <br/>
        </div>
    )
}

export default Bounty