
const {readFileSync}= require('fs');

const path= require('path');
 // home page


 const showHomepage= (req , res)=>{
   const slider= readFileSync(path.join(__dirname, '../db/slider.json'));
   const boxitem= readFileSync(path.join(__dirname, '../db/box-item.json'));
    res.render('index',{

      slider:JSON.parse(slider.toString()),
      boxitem:JSON.parse(boxitem.toString())
    });
 }

 const showstaffpage=(req, res)=>{
    const staff = readFileSync(path.join(__dirname, '../db/staff.json'))

    res.render('staff',{
        staff : JSON.parse(staff.toString())
    });
 }

 const showsmenupage= (req, res)=>{
    res.render('menu');
 }
 

 


 //export obj
 module.exports={
    showHomepage,
    showstaffpage,
    showsmenupage
   
 }