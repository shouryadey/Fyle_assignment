const express=require('express');
const app=express();
const Postroutes=require('./routes/post')
const bdp=require('body-parser');

app.use(bdp.json());

app.use('/',Postroutes);
const PORT = process.env.PORT || 3030

app.listen(PORT,err=>{
	if(err)
		console.log("ERROR at connecting");
	console.log('CONNECTED AT 3030');
});
