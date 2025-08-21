const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name:{
        type :String
    },
    authorname:{
        type:String
    },
    genre :{
        type:String
    },
    edition :{
        type:String
    },
    part:{
        type:Number
    },
    UID:{
        type:Number,
        unique :true
    },
     assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Student", default: null }
    
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book

//  const data = await Person.find({}, { name: 1, age: 1, _id: 0 }); 
"name authorname UID"