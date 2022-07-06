const { trace } = require('console')
const asyncHandler = require('express-async-handler')


const Goal = require('../models/goalModel')



// @desc    Get goals
// @routes  GET  /api/goals
// @access  private
const getGoal = asyncHandler (async (req, res) =>{
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc    Set goals
// @routes  Post /api/goals
// @access  private
const setGoal = asyncHandler (async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
    }) 

    res.status(200).json(goal)
})

// @desc    Update goals
// @routes  PUT  /api/goals/:id
// @access  private
const updateGoal = asyncHandler (async(req, res) =>{

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error ('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
    })


    res.status(200).json(updatedGoal)
})

// @desc    Delete goals
// @routes  Delete  /api/goals/:id
// @access  private
const deleteGoal = asyncHandler (async(req, res) =>{

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400) 
        throw new Error ('Goal not found')
    }

    await goal.remove()


    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}