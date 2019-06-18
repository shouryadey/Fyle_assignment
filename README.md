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
#### Note:The JWT has been passed as query parameter,it can aslo be passed as Authorization Header for convenience in terms of secuirty.
------------------------------------------------------------------------------------------------
### URL:
#### 1)The Hosting URL in Heroku:
https://protected-plateau-55954.herokuapp.com/


#### 2)To get bankdetails with IFSC code =ABHY0065001 ,limit =5, offset= 0 :

https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001&limit=5&offset=0&authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU


#### 3)To get branchdetails with bankname=ABHYUDAYA COOPERATIVE BANK LIMITED,city=MUMBAI,limit=5,offset=1:

https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED&city=MUMBAI&limit=5&offset=1&authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU

---------------------------------------------------------------------------------------------------
### Curl scripts:
#### 1) For getting bankdetails:

###### *Passing JWT as Authorization Header*

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU" https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001"&"limit=5"&"offset=0

#####  OR

###### *Passing JWT as a part of query string*

curl https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001"&"limit=5"&"offset=0"&"authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU

#### 2) For getting branch details : 

###### *Passing JWT as Authorization Header*

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU" https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED"&"city=MUMBAI"&"limit=5"&"offset=0

#####  OR

###### *Passing JWT as a part of query string*

curl https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED"&"city=MUMBAI"&"limit=5"&"offset=1"&"authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU

----------------------------------------------------------------------------------------------------
