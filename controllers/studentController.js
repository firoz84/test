
const path=require('path');
const {readFileSync, writeFileSync}=require('fs');


const students= JSON.parse(readFileSync(path.join(__dirname,'../db/student.json')))

const shoALlStudent= (req, res)=>{
   
    res.render('student/index', {
        students
    })
}

const addStudentData= (req, res)=>{

    const {name, gmail, cell, location}= req.body;

let last_id=1;
if( students.length > 0){
    last_id=students[students.length -1].id +1;
}

    students.push({
        id:last_id, 
        name:name,
        gmail:gmail,
        cell:cell,
        location:location,
        photo:req.file.filename

    });
   
    writeFileSync(path.join(__dirname, '../db/student.json'),JSON.stringify(students));
    res.redirect('/student')

}



const showFormStudent= (req, res)=>{

    res.render('student/create')

}

module.exports={
    shoALlStudent,
    addStudentData,
    showFormStudent
}