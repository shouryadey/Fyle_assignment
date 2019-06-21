### A Node.js REST service that fetches 

1. Bank details ,given branch IFSC code.

2. All details of branches ,given bank name and a city.

   Both the services uses GET API to fetch the data,and also supports optional parameters limit and offset.
----------------------------------------------------------------------------------------------
### Details:

1. APIs are authenticated using JWT token ,valid for 5 days.

2. PostgreSQL is used as bankend. 

3. All datas are passed as query parameters.

4. The JWT Token is : Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU
#### Note:The JWT key has been passed as Authorization Header 
------------------------------------------------------------------------------------------------
### URL:

#### 1)The Hosting URL in Heroku:

https://protected-plateau-55954.herokuapp.com/

---------------------------------------------------------------------------------------------------
### To run Curl commands in commandline/terminal
#### 1) For getting bankdetails:

###### *Passing JWT as Authorization Header*

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU" https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001"&"limit=5"&"offset=0



#### 2) For getting branch details : 

###### *Passing JWT as Authorization Header*

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU" https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED"&"city=MUMBAI"&"limit=5"&"offset=0

#### NOTE:
##### In case the token expires one can get a new token using the service https://protected-plateau-55954.herokuapp.com/tokenrequest

######  The format for curl query is :
   curl   --header   "Authorization: Bearer  <token> "    <url+query_parameters>

----------------------------------------------------------------------------------------------------
### To run Curl scripts in terminal 
   ##### Check the directory named Curl Scripts ,it contains 3 items:
      1) bankdetails.sh file to call GET API to fetch bank details using curl 
      2) branchdetails.sh file to call GET API to fetch branch details using curl
      3) Documentation on how to use the scripts using a walkthrough example.

   
