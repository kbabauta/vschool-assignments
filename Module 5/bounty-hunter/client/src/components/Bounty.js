import React, {useState} from "react";
import BountyForm from "./bountyForm";

export default function Bounty(props){
        const {firstName, lastName, bounty, bountyType, _id, status} = props
        const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty">
            {!editToggle ?
                
                    <>
                        <h1>{firstName} {lastName}</h1>
                        <h3>Status: {status}</h3>
                        <p>{bounty} cr</p>
                        <p><b>Affiliation:</b> <i>{bountyType}</i></p>
                        <button
                            onClick={() => props.deleteBounty(_id)}
                            className="delete-btn">Delete
                        </button>
                        <button
                            className="edit-btn"
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}
                            >
                            Edit
                        </button>
                    </>
                    :
                    <>
                        <BountyForm
                            firstName={firstName}
                            lastName={lastName}
                            bounty={bounty}
                            bountyType={bountyType}
                            _id={_id}
                            btnText="Save Edit"
                            submit={props.editBounty}
                        />
                        <button
                            className="close-btn"
                            onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                            Close
                        </button>
                    </>
                }
        </div>
    )
}
