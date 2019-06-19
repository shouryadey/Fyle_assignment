
### Curl scripts:
#### 1) For getting bankdetails:

##### *To get bankdetails with IFSC code =ABHY0065001 ,limit =5, offset= 0 :*

*Passing JWT as Authorization Header*

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU" https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001"&"limit=5"&"offset=0

#### 2) For getting branch details :

##### *To get branchdetails with bankname=ABHYUDAYA COOPERATIVE BANK LIMITED,city=MUMBAI,limit=5,offset=1:*

*Passing JWT as Authorization Header*

curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwODc1MTUxLCJleHAiOjE1NjEzMDcxNTF9.EzMbWG7x4J-s_SzYsoSRR7x1_sUixqZNDzPhXyTbacU" https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED"&"city=MUMBAI"&"limit=5"&"offset=0
