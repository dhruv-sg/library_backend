const express = require('express')
const router = express.Router();
const Book = require('./../model/book')

// to add new Book
router.post("/add", async (req, res) => {
    try {
        const data = req.body;

        const newBook = new Book(data);
        const response = await newBook.save();

        console.log(" Data saved");
        res.status(200).json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// to get the list of books
router.get('/list', async (req, res) => {
    try {
        const data = await Book.find()
        console.log('data feched')
        res.status(200).json(data);
    } catch (error) {
        console.log(error);

    }
})

// for update the data 
router.put('/:UID', async (req, res) => {
    try {
        const UID = req.params.UID
        const updateddata = req.body;

        const response = await Book.findOneAndUpdate(
            { UID: UID },                    //  filter must be an object
            updateddata,
            {
                new: true,                     // return updated doc instead of old one
                runValidators: true            // validate before saving
            }
        );

        if (!response) {
            res.status(404).json({ error: 'person data not found' })
        }
        console.log('data updated');
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// to see available books
router.get("/available", async (req, res) => {
  try {
    const books = await Book.find({ assignedTo: null });
    res.status(200).json({ availableBooks: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router