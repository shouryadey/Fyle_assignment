const bdp=require('body-parser');
const jwt=require('jsonwebtoken')
const {Pool,Client}=require('pg');

constring=process.env.DATABASE_URL

const pool=new Pool({
		connectionString:constring,
		ssl:true,
		poolSize:10,
		reconnectOnDatabaseIsStartingError: true,         // Enable/disable reconnecting on "the database system is starting up" errors
  		waitForDatabaseStartupMillis: 0,                  // Milliseconds to wait between retry connection attempts while the database is starting up
  		databaseStartupTimeoutMillis: 9000,              // If connection attempts continually return "the database system is starting up", this is the total number of milliseconds to wait until an error is thrown.
  		reconnectOnReadOnlyTransactionError: true,        // If the query should be retried when the database throws "cannot execute X in a read-only transaction"
  		waitForReconnectReadOnlyTransactionMillis: 0,     // Milliseconds to wait between retry queries while the connection is marked as read-only
  		readOnlyTransactionReconnectTimeoutMillis: 90000,
  	});

exports.getbankdetails=(req,res)=>{
	//console.log(req.query);
	let limit=req.query.limit;
	let offset=req.query.offset;
	
	if(limit==undefined|| limit.trim()=="")
		limit=null;
	if(offset==undefined|| offset.trim()=="")
		offset=null;
	const ifsc=req.query.IFSC_code;
	//console.log(ifsc);
	/*const client=new Client({
		user:'postgres',
		host:'localhost',
		database:'newdb',
		password:'password',
		port:5432,
	});*/
	
	let Query="SELECT * FROM bank_branches WHERE ifsc='"+ifsc+"' LIMIT "+limit+" OFFSET "+offset;

	pool.connect((err,client,done)=>{
		if(err)
		{
			res.json({
				message:'connection error',
				error:err
			});
		}

		client.query(Query,(err,result)=>{
			done();
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
	//console.log(req.query);
	let limit=req.query.limit;
	let offset=req.query.offset;
	
	if(limit==undefined|| limit.trim()=="")
		limit=null;
	if(offset==undefined|| offset.trim()=="")
		offset=null;

	const bank_name=req.query.bank_name;
	const city=req.query.city; 
		/*const client=new Client({
		user:'postgres',
		host:'localhost',
		database:'newdb',
		password:'password',
		port:5432,
	});*/
	
	let Query="SELECT * FROM bank_branches WHERE bank_name='"+bank_name+"' AND city='"+city+"' LIMIT "+limit+" OFFSET "+offset;

	pool.connect((err,client,done)=>{
		if(err)
		{
			res.json({
				message:'connection error',
				error:err
			});
		}

		client.query(Query,(err,result)=>{
			done();
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
	
	//console.log("In Login");
	let token=jwt.sign({username:'username'},'secret',{expiresIn:"5d"});
	//console.log(token);

	res.json({
		message:"Token recieved",
		token:token
	});

}
exports.home=(req,res)=>{
	res.send('HOSTING URL');
}

