import React from 'react'
import Pet from './Pet'
import Friend from './Friend'

function FriendList(props) {
    const friends = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "Spot",
              breed: "Tabby"
            },{
              name: "John Johnson",
              breed: "Husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "sphynx cat"
            },{
              name: "tiger",
              breed: "sphynx cat"
            },{
              name: "oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ]
    const friendList = friends.map(friend => {
        return(<Friend name={friend.name} age={friend.age} pets={friend.pets}/>)
    })
    return(
        <div className='container'>
            {friendList}
        </div>
    )
}

export default FriendList