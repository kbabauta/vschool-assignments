import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Bounty from './components/Bounty'
import BountyForm from './components/bountyForm'


function App() {
  const [bounties, setBounties] = useState([])


//GET Request
  function getBounties(){
    axios.get('/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }



// POST new bounty
function addBounty(newBounty) {
  axios.post('/bounties', newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }



//DELETE
function deleteBounty(bountyId) {
  axios.delete(`/bounties/${bountyId}`)
    .then (res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
}


//PUT
function editBounty( updates, bountyId ) {
  axios.put(`/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
}

useEffect(() => {
  getBounties()
}, [])

return (
  <div>
    <div className='bounty-container'>
      <BountyForm
        submit={addBounty}
        btnText="Add Bounty"/>
      {bounties.map(bounty => 
        <Bounty
        {...bounty}
        key={bounty._id}
        deleteBounty={deleteBounty}
        editBounty={editBounty} />)}
      

    </div>
  </div>
      
  )

}


export default App;