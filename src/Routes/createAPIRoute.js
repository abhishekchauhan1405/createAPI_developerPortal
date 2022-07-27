const express =  require("express");
const router  = express.Router();
const bodyParser = require('body-parser')
const getToken = require('./../Models/getToken');

router.use(bodyParser.json());
router.put('/createApi',async (req,res)=>{
    let mainBody = req.body;
    if(mainBody.hasOwnProperty('name') && mainBody.properties.hasOwnProperty('displayName')){
        //console.log("hello")
    if(mainBody.name === '' || mainBody.properties.displayName === '')
    {
    res.status(400).send("Mandatory params value empty");
    }
    else{

        //res.send("next operation");
      let token_generated =  await getToken();
      console.log(token_generated);
    //   res.send(token_generated);
      
    }
    }   
    else{
        res.status(400).send("Mandatory params missing.")
    }
});



module.exports = router;