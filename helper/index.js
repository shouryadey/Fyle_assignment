const jwt=require('jsonwebtoken')

exports.authenticate=(req,res,next)=>{
  let token=req.headers['authorization'];
	if(token!=undefined && token.startsWith('Bearer'))
	{
		token=token.slice(7,token.length);
	//console.log(token);
		jwt.verify(token,'secret',(err,decoded)=>
		{
			if(err)
			{
			//	console.log("ERROR AT AUTHENTICATION");
        		res.json({
         			 message:'TOKEN IS NOT VALID'
        		});
    		}
			else
			{
          		next();
        	}
      });
	}
	else
	{
    //console.log("INVALID REQUEST,WITHOUT BEARER TOKEN");
    	res.json({
      		message:"Authentication not supplied"
    	});
  
  	}

}

