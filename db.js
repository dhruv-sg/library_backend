const mongoose = require("mongoose")

const mongoURL = 'mongodb://localhost:27017/information'

mongoose.connect(mongoURL,{
    
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongo db server');
    
})


module.exports = db;