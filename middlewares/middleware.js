


const midleCheck= (req, res, next)=>{
    const {name, age}= req.body;

    if(age>=70){

        res.status(200).send(`Hi ${name} dada biya koro na keno`);

    }else{
        next();
    }

}

module.exports={
    midleCheck
}