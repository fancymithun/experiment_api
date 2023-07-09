const User = require("../models/User")

const signup = async (req,res) => {
    let {username,password,phone} = req.body;

    if(!username || !password || !phone){
        res.status(400).json({
            error : "Please enter required fields"
        })
    }

    const user = new User({username,password,phone})

    return res.json({message : user})
    
    // await user.save().then((req,res) => {
    //     res.status(201).json({
    //         message : "User created successfully"
    //     }).catch(() => {
    //         res.status(400).json({
    //             error : "Failed to create user"
    //         })
    //     })
    // })

}

const signin = async(req,res) => {

}

const deleteUser = async(req,res) => {

}

const getUser = async(req,res) => {

}

const getAllUsers = async(req,res) => {

}

module.exports = {signin,signup,deleteUser,getUser,getAllUsers}