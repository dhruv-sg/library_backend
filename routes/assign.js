const express = require('express')
const router = express.Router();
const Student = require('./../model/person')
const Book  = require('./../model/book')
const History  = require('./../model/history')

router.put('/:enrollment/:UID',async(req,res)=>{
    try {
        
        const {enrollment,UID} = req.params;
        const {action} = req.body;
        
        const student = await Student.findOne({enrollment:enrollment})
        if(!student) return res.status(404).json({error : "student data not found"})

         const book = await Book.findOne({UID:UID})
        if(!book) return res.status(404).json({error : "book data not found"})

        if(action === "borrow"){
            if(book.assignedTo){
                res.status(400).json({error : "book is already assigned"})
            }
        
        // assign book
        book.assignedTo = student._id
        if(!student.books.includes(book._id)) student.books.push(book._id)

            await book.save()
            await student.save()

            await History.create({student : student._id,book : book._id,action : "borrowed"})

            return res.status(200).json({message:"book assigned successfully"})
        }
            if(action === "return"){
                if(!book.assignedTo || !book.assignedTo.equals(student._id)){
                    return res.status(400).json({error:"this student hasnt borrowed this book"})
                }
            

            //return book
            book.assignedTo = null ;
            student.books = student.books.filter(b => !b.equals(book._id))

            await book.save()
            await student.save()

            await History.create({student : student._id,book : book._id,action : "retunred"})
            return res.status(200).json({message:"book returned successfully"})
            }

            return res.status(400).json({message:"use borrow or return"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"})
    }
})

// to get history of student's book boroorwing 
router.get("/:enrollment/history", async (req, res) => {
  try {
    const { enrollment } = req.params;

    const student = await Student.findOne({ enrollment },);
    if (!student) return res.status(404).json({ error: "Student not found" });

    const history = await History.find({ student: student._id })
      // .populate("book", "name authorname UID")
      .populate("book", {name : 1,authername : 1 ,UID :1})
      .sort({ date: -1 });


    //    // Format dates
    // const history = historyData.map(record => {
    //   const options = {
    //     day: "2-digit",
    //     month: "2-digit",
    //     year: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //     hour12: true
    //   };

    //   return {
    //     ...record.toObject(),
    //     date: new Date(record.date).toLocaleString("en-IN", options) // Example: 21-08-2025, 02:45:12 PM
    //   };
    // });
    res.status(200).json({
      student: {
        name: student.name,
        lastname: student.lastname,
        enrollment: student.enrollment
      },
      history
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router

//     //find student by enrollment
    //     const student  = await Student.findOne({enrollment:enrollment})
    //     if(!student){
    //         return res.status(404).json({error:'student not found'})
    //     }

    //     const book = await Book.findOne({UID:UID})
    //     if(!book){
    //         return res.status(404).json({error:'book not found'})
    //     }

    //     // assign book by adding into array(if not already asigned)
    //       if (!student.books.includes(book._id)) {
    //             student.books.push(book._id);
    //             await student.save();
    // }

    // res.status(200).json({
    //   message: "Book assigned successfully ",
    //   student
    // });