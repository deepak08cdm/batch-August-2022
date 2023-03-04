import express from 'express'
import routes from './Routes/routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
// const express = require('express')

//connection to DB
mongoose.connect('mongodb+srv://deepak08:qwert@cluster0.q06cc7h.mongodb.net/batch-aug-2022?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{console.log('connected to db')})

const app = express()
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(bodyParser.json())

app.use(routes)

app.listen(3200,()=>{console.log('connected to backend at port 3200')})
//mongodb+srv://deepak08:qwert@cluster0.q06cc7h.mongodb.net/JPS?retryWrites=true&w=majority
//mongodb+srv://deepak08:<password>@cluster0.q06cc7h.mongodb.net/?retryWrites=true&w=majority
// app.use is used to add any files to express application
//middleware:- when ever we want to process external function to process the req and res of express application.
// we use app.use to process such functions and include their result in our express application




/**
 * package manager to install libraries
 * create a server using express
 * create routes and add it to express aplication
 * create connetion to mongodb using mongoose
 * create schema and connect to collection using mongoose
 * use schema to appluy cred operations on db
 */