const express=require('express');
const {getbankdetails,getbranchdetails,login,home}=require('../controllers/post');
const {authenticate}=require('../helper')

const router=express.Router();
router.get('/',home);
router.get('/tokenrequest',login);
router.get('/bankdetails',authenticate,getbankdetails);
router.get('/branchdetails',authenticate,getbranchdetails);

module.exports=router;

