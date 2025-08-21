const express = require('express')
const router = express.Router();
const Student = require('./../model/person')

// to add new student in system
router.post("/register", async (req, res) => {
    try {
        const data = req.body;

        const newStudent = new Student(data);
        const response = await newStudent.save();

        console.log(" Data saved");
        res.status(200).json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// to get the list of students
router.get('/list',async(req,res)=>{
    try {
        const data = await Student.find()
        console.log("data fatched");
         res.status(200).json(data);
    } catch (error) {
      console.log(error);
      
        
    }
})

//get info of perticular studentd by enrollment
router.get('/:enrollment',async (req,res)=>{
    try {
        const enrollment = req.params.enrollment

        const student = await Student.findOne(
            {enrollment:enrollment}
        ).populate("books");

         res.status(200).json(student);
    } catch (error) {
        console.log(error)
    }
})

// to update the data 
router.put("/:enrollment",async (req,res)=>{
    try {
        const enrollment = req.params.enrollment
        const updateddata = req.body

        const response = await Student.findOneAndUpdate(
            {enrollment : enrollment},
            updateddata,
        {
            new : true,
            runValidators: true
        }
        )
        if(!response){
            res.status(404).json({error : 'student data not found'})
        }
        console.log('data updated');
    res.status(200).json(response)        

        
    } catch (error) {
        console.log(error)
    }
})

// to delete any student data 
router.delete('/:enrollment',async(req,res)=>{
try {
   const enrollment = req.params.enrollment;
   const response = await Student.findOneAndDelete(
    {enrollment:enrollment}
   )
   if(!response){
        res.status(404).json({error:'person data not found'})
      }
      console.log('data deleted');
    res.status(200).json({message : 'deleted'})
} catch (error) {
  console.log(error);
    res.status(500).json({ error: 'Internal Server Error' }); 
}
})
module.exports = router