const db = require("../controller/database/index")

const userData = async (req, res) => {
    res.status(200).send({
        status: true,
        message: 'Back-end Work Fine!!'
    })
}

const getData = async (req,res) => {
    console.log("get data successfully!!!")
    db.query('SELECT * FROM bioData',(error, result) => {
     if(error){
         console.log("SELECT query error");
     }else{
         let data = result;
         res.status(200).send({
             status: true,
             data: data
         })
     }
    })
}

const submitForm = async (req, res) => {
    const { fname, lname, email } = req.body;
     db.query('SELECT email FROM bioData WHERE ?', {email: email} , (err,result)=>{
        if(err){
            console.log("email select query not work");
        }else{
            const SelEmail = result;
            if(SelEmail.length > 0){
                res.send({
                    status: false,
                    data: "Email is already use"
                })
            }else{
                 db.query('INSERT INTO bioData SET ?', { Firstname: fname, Lastname: lname, email: email }, (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                       console.log("data insert successfully!!!")
                       db.query('SELECT * FROM bioData',(error, result) => {
                        if(error){
                            console.log("SELECT query error");
                        }else{
                            let data = result;
                            res.status(200).send({
                                status: true,
                                data: data
                            })
                        }
                       })
                    }
                });
            }
        }
    })

}

module.exports = {
    userData,
    getData,
    submitForm
}