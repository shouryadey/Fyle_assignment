const bdp=require('body-parser');
const jwt=require('jsonwebtoken')
const {Pool,Client}=require('pg');

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
	const client=new Pool({
		connectionString:process.env.DATABASE_URL,
		ssl:true
	});

	client.connect();
	let Query="SELECT * FROM bank_branches WHERE ifsc='"+ifsc+"' LIMIT "+limit+" OFFSET "+offset;
	//console.log(Query);
	client.query(Query)
		  .then(result=>{
				res.json({
				message:"success,bank details received",
				result:result.rows
				});
			})
		  .catch(()=>{
			res.json({
				message:"failure,data not retrieved"
			});
		  })
		  .then(()=>{
			  client.end();
			 // console.log("DATABASED CLOSED")
			});
};

exports.getbranchdetails=(req,res)=>{
	console.log(req.query);
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
	const client=new Pool({
		connectionString:process.env.DATABASE_URL,
		ssl:true
	});


	client.connect();
	let Query="SELECT * FROM bank_branches WHERE bank_name='"+bank_name+"' AND city='"+city+"' LIMIT "+limit+" OFFSET "+offset;
	
	client.query(Query)
		  .then(result=>{
				res.json({
				message:"success,branch details received",
				result:result.rows
				});
			})
		  .catch((e)=>{
			res.json({
				message:"failure,data not retrieved"
			});
		  })
		  .then(()=>{
			  client.end();
			//  console.log("DATABASED CLOSED")
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
	res.send('HOSTING URL'+'\n\n'+
	'Examples'+'\n\n'+
	'1)To get bankdetails with IFSC code =ABHY0065001 ,limit =5, offset= 0 :'+'\n\n'+
	 ' https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001&limit=5&offset=0&authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU'+'\n\n'+

	'2)To get branchdetails with bankname=ABHYUDAYA COOPERATIVE BANK LIMITED,city=MUMBAI,limit=5,offset=1:'+'\n\n'+
	 ' https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED&city=MUMBAI&limit=5&offset=1&authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU'
);
}
