i have created a library management system using nodejs and mongodb;
in this project person can do multiple operations like 
  -add student,books
  -get the list of student and book 
  -get perticular student with details of book he borrowed and also history
  -get the available books
  -update book and student data 
  -assign book to student 
  -return book
  -delete student

here i am mentioning the route of this project so it can be easy to use
there are total 11 routes since this is purely nodejs project so handle this routes using postman or insomnia

1 > to add new student --> POST http://localhost:3001/student/register 
      example BODY --> {
               	  "name":"dhruv",
	                "lastname":"gondaliya",
		              "enrollment":220760116022,
	                "age":21
                }

2 > to add new book --> POST http://localhost:3001/book/add
      example  BODY --> {
                   "name": "Tom and Jerry",
                   "authorname": "Warner Brothers",
                   "genre": "Comedy",
                   "edition": 1,
                   "part": 1,
                   "UID": 1
                 }

3> to get student list  --> GET http://localhost:3001/student/list
4> to get book list  --> GET http://localhost:3001/book/list
5> to get perticular student with borrowed book  --> GET http://localhost:3001/student/:enrollment
6> to see available books   -->  GET http://localhost:3001/Book/available
7> to get the history of student borrowing  --> GET http://localhost:3001/assignBook/:enrollment/history
8> to update book data  --> PUT http://localhost:3001/book/:UID
8> to update student data  --> PUT http://localhost:3001/student/:enrollment
9> to assign book  --> PUT http://localhost:3001/assignBook/:enrollment/:UID        --> BODY : { "action": "borrow" }
10> to return book  --> PUT http://localhost:3001/assignBook/:enrollment/:UID       --> BODY : { "action": "return" }
11 > to delete student data   --> DELETE http://localhost:3001/student/220760116033
