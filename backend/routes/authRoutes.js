const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const authenticate = require("../authenticate.js");
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const prisma = new PrismaClient();
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user already exists
    const userExists = await prisma.user.findUnique({
        where: { email: email },
    });

    if (userExists) {
        return res.status(400).json({
            message: 'User  already exists',
        });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Create new user
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: 'user', // default role
            },
        });

        res.status(201).json({
            message: "User  registered successfully",
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            message: "Error creating user",
        });
    }
});

// Signin route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
        where: { email: email },
    });

    if (!user) {
        return res.status(400).json({
            message: "User  not found",
        });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' }); // Added role and expiration

    res.json({ token });
});

// Home route
router.get('/home', authenticate, (req, res) => {
    return res.send('Welcome to the home page');
});

module.exports = router;