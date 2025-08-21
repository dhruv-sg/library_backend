const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./db");   

// Middleware to parse JSON body
app.use(express.json());

// middle ware to accept data as form data 
app.use(express.urlencoded({ extended: true }));


const bookRoutes = require('./routes/book')
app.use('/book',bookRoutes)

const personRoutes = require('./routes/student')
app.use('/student',personRoutes)

const assignRoutes = require('./routes/assign')
app.use('/assignBook',assignRoutes)


app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`);
    
})