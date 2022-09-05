
const express= require('express');
const dotenv=require('dotenv');
const path= require('path');
const layoutPage= require('express-ejs-layouts');
const pageRouter= require('./routes/student');



//environment variable

dotenv.config();

const PORT= process.env.PORT || 4000;

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//set ejs 
app.set("view engine", "ejs");

app.use(layoutPage);



//static folder
app.use(express.static('public'));

//load route;
app.use(pageRouter);
app.set('layout', 'layouts/app');


app.use('/student', pageRouter);

//server listen

app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`);
})

