i have created a library management system using nodejs and mongodb;<br>
in this project person can do multiple operations like <br>
  -add student,books<br>
  -get the list of student and book <br>
  -get perticular student with details of book he borrowed and also history<br>
  -get the available books<br>
  -update book and student data<br> 
  -assign book to student <br>
  -return book<br>
  -delete student<br>

here i am mentioning the route of this project so it can be easy to use<br>
there are total 11 routes since this is purely nodejs project so handle this routes using postman or insomnia<br>

1 > to add new student --> POST http://localhost:3001/student/register <br>
      example BODY --> {<br>
               	  "name":"dhruv",<br>
	                "lastname":"gondaliya",<br>
		              "enrollment":220760116022,<br>
	                "age":21<br>
                }<br>

2 > to add new book --> POST http://localhost:3001/book/add<br>
      example  BODY --> {<br>
                   "name": "Tom and Jerry",<br>
                   "authorname": "Warner Brothers",<br>
                   "genre": "Comedy",<br>
                   "edition": 1,<br>
                   "part": 1,<br>
                   "UID": 1<br>
                 }<br>

3> to get student list  --> GET http://localhost:3001/student/list<br>
4> to get book list  --> GET http://localhost:3001/book/list<br>
5> to get perticular student with borrowed book  --> GET http://localhost:3001/student/:enrollment<br>
6> to see available books   -->  GET http://localhost:3001/Book/available<br>
7> to get the history of student borrowing  --> GET http://localhost:3001/assignBook/:enrollment/history<br>
8> to update book data  --> PUT http://localhost:3001/book/:UID<br>
8> to update student data  --> PUT http://localhost:3001/student/:enrollment<br>
9> to assign book  --> PUT http://localhost:3001/assignBook/:enrollment/:UID        --> BODY : { "action": "borrow" }<br>
10> to return book  --> PUT http://localhost:3001/assignBook/:enrollment/:UID       --> BODY : { "action": "return" }<br>
11 > to delete student data   --> DELETE http://localhost:3001/student/220760116033<br>
