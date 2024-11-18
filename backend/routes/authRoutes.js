const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const authenticate = require("../authenticate.js");
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

const usersFile = './users.json';
// this is the path to temporary database

const getUsers=()=>{
    if(!fs.existsSync(usersFile)){
        fs.writeFileSync(usersFile, JSON.stringify([],null,2));
        return [];
    }
    userData = fs.readFileSync(usersFile,'utf-8');
    if (userData.trim() === "") {
        return [];  // Return an empty array if the file is empty
    }

    try {
        return JSON.parse(userData);  // Parse the JSON content
    } catch (error) {
        console.error("Error parsing users data:", error);
        return [];  // Return an empty array if JSON parsing fails
    }
}

const saveUsers=(users)=>{
    fs.writeFileSync(usersFile,JSON.stringify(users,null,2));
};

router.post("/signup",async(req,res)=>{
    const {email,password} = req.body;
    const users = getUsers();
    if(users.some((user)=>user.email == email)){
        return res.status(400).json({
            message  : 'User already exists'
        });
    }
    const hashedPassword = await bcrypt.hash(password,10);

    users.push({
        email,
        password : hashedPassword
    });
    saveUsers(users);

    res.status(201).json({
        message : "User registered succesfully"
    })
})

router.post('/signin', async (req, res) =>{
    const {email,password} = req.body;
    const users = getUsers();

    const user = users.find((user)=> user.email == email);
    
    if(!user){
        return res.status(400).json({
            message : "User not found"
        });
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({
            message : "Invalid credentials"
        });
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    res.json({token});
});

router.get('/home',authenticate,(req,res)=>{
   return res.send('welcome to home page');
});

module.exports = router ;