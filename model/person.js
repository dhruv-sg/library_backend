const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type :String
    },
    lastname:{
        type:String
    },
     enrollment:{
        type :Number,
        unique : true
    },
    age:{
        type : Number
    },
   books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]  // relation
})

const Person = mongoose.model('Person',personSchema)
module.exports = Person;