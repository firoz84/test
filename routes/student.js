

const express= require('express');
const { shoALlStudent,showFormStudent,addStudentData } = require('../controllers/studentController');
const multer= require('multer');
const path = require('path');





const router= express.Router();

//multer file upload

const storages= multer.diskStorage({
destination:( res, file, cb)=>{
    cb(null, path.join(__dirname, '../public/images/student'))
},
filename:( res, file, cb)=>{
cb( null, file.originalname)
}


})
const studentPhoto= multer({

    storage:storages
}).single('photo');

router.get('/', shoALlStudent);
router.get('/create', showFormStudent);
router.post('/create',studentPhoto, addStudentData);





module.exports= router;