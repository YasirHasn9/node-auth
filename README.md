# node-auth

using session and cookies for authentication and authorization
1.make a package.json
2.install some dependencies that help work on the current situation and scale up and
install other in the future

3.before you start to push your code to github make sure to use the .gitignore
to include all the file that you dont want to push to your repo.

4.create a file for your database
5.create a knexfile so you can start to build the database
6.configure the knexfile
7.make a connections file in the database file that enables you to connect to the
database so we can use knex to commend it.

8.run in your terminal npx knex migrate:make init
(init = shortcut for initial)

9.create a table using migrations
10.after creating your table run ##npx knex migrate:latest
11.in our case we created a new table called users to add it up to db
we need to rollback by ##npx knex migrate:rollback
and then ##npx knex migrate:latest

10.create seed // this is optional read about it https://knexjs.org/

11.build the server
12.install nodemon so we can run the server on every change automatically
13.configure the package.json

make
"scripts": {
"server": "nodemon index.js"
},

12.read through files

13.install the bcryptjs library for hashing the password

14.hash the password 

15.use session to produces cookies 
what is cookies ? 
is a container of key/value of data that travels between the server and client

what is session?
is a way to store information about the client on the sever
-lives in the memory of the server once we restart the server it gets lost 
   so isn t best practice to store on the server

the api server will create session for the client that produces cookies 

to store the cookies in the session , there a library called express-session
that would help us to do that for us