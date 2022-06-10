const express = require('express')
const bountyRouter = express.Router()
const Bounty = require("../models/bountyModel.js")

bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if (err){
                res.status(500)
                return next (err)
            }
            return res.status(200).send(bounties)
        })
    })

    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })


bountyRouter.route("/:bountyId")
    .put((req, res, next) =>{
        Bounty.findOneAndUpdate(
            {_id: req.params.bountyId},
            req.body,
            {new: true},
            (err, updatedBounty) => {
                if (err) {
                    res.status(500)
                    return next (err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })
    .delete((req, res, next) => {
        Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(200).send(`${deletedBounty.firstName} bounty has been completed.`)
        })
    }) 



module.exports = bountyRouter

// PART 1 - SERVER SETUP AND GET & POST ROUTES
// const bounties = [
//     { 
//         "firstName": "Han", 
//         "lastName": "Solo", 
//         "living": true, "bounty": 2000, 
//         "type": "N/A", 
//         _id: uuid() 
//     },
//     { 
//         "firstName": "Luke", 
//         "lastName": "Skywalker", 
//         "living": true, 
//         "bounty": 9999, 
//         "type": "Jedi",
//          _id: uuid() 
//     },
//     { 
//         "firstName": "Leia", 
//         "lastName": "Organa", 
//         "living": true, 
//         "bounty": 1000, 
//         "type": "Jedi", 
//         _id: uuid() 
//     },
//     { 
//         "firstName": "Anakin", 
//         "lastName": "Skywalker", 
//         "living": false, 
//         "bounty": 0, 
//         "type": "Sith", 
//         _id: uuid() 
//      },
// ]

//GET ALL
// bountyRouter.get("/", (req, res, next) => {
//     Bounty.find((err, bounties) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(bounties)
//     })


// //Get ONE
// bountyRouter.get("/:bountyId", (req, res, next) => {
//     Bounty.findOne ({_id: req.params.bountyId},
//         (err, bounty) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(bounty)
//         })
    
// })

// bountyRouter.post("/", (req, res, next) => {
//         const newBounty = new Bounty (req.body)
//         newBounty.save((err, savedBounty) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(savedBounty)
//         })
        
        

// // // PART 2 - ADDING PUT & DELETE 
// bountyRouter.delete("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send("Successfully removed bounty from the registry")
// })

// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const updateObject = req.body
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties [ bountyIndex ], updateObject)
//     res.send(updatedBounty)

// })



