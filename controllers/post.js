const bdp=require('body-parser');
const jwt=require('jsonwebtoken')
const {Pool}=require('pg');

constring=process.env.DATABASE_URL

// A single pool is created that has capacity for atmost  10 concurrent connections.
const pool=new Pool({
		connectionString:constring,
		ssl:true,
		max:10
	  });

exports.getbankdetails=(req,res)=>{
	
	let limit=req.query.limit;
	let offset=req.query.offset;
	
	if(limit==undefined|| limit.trim()=="")
		limit=null;
	if(offset==undefined|| offset.trim()=="")
		offset=null;
	const ifsc=req.query.IFSC_code;

	
	let Query="SELECT * FROM bank_branches WHERE ifsc='"+ifsc+"' LIMIT "+limit+" OFFSET "+offset;

// connect(err,client,release ) ->Acquires a client from the pool. If the pool is 'full' and all clients are 
//currently checked out, this will wait until a client becomes available by it being released back to the pool.
//If the pool is not full a new client will be created & returned to this callback.

	pool.connect((err,client,release)=>{
		if(err)
		{
			res.json({
				message:'connection error',
				error:err
			});
		}

		client.query(Query,(err,result)=>{
//The release Callback releases an acquired client back to the pool. 
			release()
			if(err)
			{
				res.json({
				message:"failure,data not retrieved"
				});
			}
			res.json({
				message:"success,branch details received",
				result:result.rows
				});
		});
	});
};


exports.getbranchdetails=(req,res)=>{

	let limit=req.query.limit;
	let offset=req.query.offset;
	
	if(limit==undefined|| limit.trim()=="")
		limit=null;
	if(offset==undefined|| offset.trim()=="")
		offset=null;

	const bank_name=req.query.bank_name;
	const city=req.query.city; 
	
	
	let Query="SELECT * FROM bank_branches WHERE bank_name='"+bank_name+"' AND city='"+city+"' LIMIT "+limit+" OFFSET "+offset;

	pool.connect((err,client,release)=>{
		if(err)
		{
			res.json({
				message:'connection error',
				error:err
			});
		}

		client.query(Query,(err,result)=>{
			release()
			if(err)
			{
				res.json({
				message:"failure,data not retrieved"
				});
			}
			res.json({
				message:"success,branch details received",
				result:result.rows
				});
		});
	});
};

exports.login=(req,res)=>{
	
	let token=jwt.sign({username:'username'},'secret',{expiresIn:"5d"});
	

	res.json({
		message:"Token recieved",
		token:token
	});

}
exports.home=(req,res)=>{
	res.send('HOSTING URL');
}

