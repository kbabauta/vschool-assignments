const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const { send } = require('express/lib/response')
const router = express.Router()
const Item = require("../models/inventory")



//Get All
router.get("/", (req, res, next) => {
    Item.find((err, inventory) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(inventory)
    })
})


//Get One
    .get("/:itemId", (req, res, next) => {
        Item.findOne({_id: req.params.itemId},
            (err, item) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(item)
            })
    })

// Post
    .post ("/", (req, res, next) => {
        const newItem = new Item(req.body)
        newItem.save((err, savedItem) => {
            if (err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(savedItem)
        })
    })



// Update
    .put("/:itemId", (req, res, next) => {
        Item.findOneAndUpdate(
            {_id: req.params.itemId},
            req.body,
            {new: true},
            (err, updatedItem) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })


// Delete
    .delete("/:itemId", (req, res, next) => {
        Item.findOneAndDelete(
            {_id: req.params.itemId},
            (err, deletedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(deletedItem)
            }
        )
    })

module.exports = router