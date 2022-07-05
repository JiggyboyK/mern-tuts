const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @routes  GET  /api/goals
// @access  private
const getGoal = asyncHandler (async (req, res) =>{
    res.status(200).json({ message: 'Get goals' })
})

// @desc    Set goals
// @routes  Post /api/goals
// @access  private
const setGoal = asyncHandler (async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set goals' })
})

// @desc    Update goals
// @routes  PUT  /api/goals/:id
// @access  private
const updateGoal = asyncHandler (async(req, res) =>{
    res.status(200).json({ message: `Update goals ${req.params.id}` })
})

// @desc    Delete goals
// @routes  Delete  /api/goals/:id
// @access  private
const deleteGoal = asyncHandler (async(req, res) =>{
    res.status(200).json({ message: `Delete goals ${req.params.id}` })
})


module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}