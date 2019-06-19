#### To run Curl scripts 
 1) execute the bash file ex. bankdetails.sh ,branchdetails.sh without any arguements
 
 2) The user will prompted to enter inputs ex. In case of bankdetails.sh ,the user will be promtpted to input      IFSC_code,limits and offset
 
 3) after receiving of data,the user will be prompted to continue using the same script using the option '1' or else quit the execution of the script using '0'.
------------------------------------------------------------------------------------------------------
#### A walkthrough with branchdetails.sh
##### 1) Go to the directory where the bash files are present ,in this case Curl Scripts directory
##### 2) Open Terminal
######  *i Execute the script branchdetails.sh in terminal*
        
        $ ./branchdetails.sh

######  *ii   The user will be prompted for bank_name*
       
       $ bank_name : 

###### *iii Enter bank name the press enter*
       
       $ bank_name : ABHYUDAYA COOPERATIVE BANK LIMITED

######  *iV  Similarly enter city,limits,offset(limits and offsets are optional parameters) then press enter*
       
        $ city : NAVI MUMBAI
        $ limit : 5
        $ offset : 0

######   *V Wait until you can see the response  without  pressing any key(as it could cause the execution to stop)*
     
     {"message":"success,branch details received","result":[{"ifsc":"ABHY0065044","bank_id":"60","branch":"GHANSOLI","address":"SHREE MANOSHI COMPLEX, PLOT NO.5& 6, SECTOR-3, GHANSOLI, NAVI MUMBAI GHANSOLI- 410 701.","city":"NAVI MUMBAI","district":"THANE","state":"MAHARASHTRA","bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED"},{"ifsc":"ABHY0065045","bank_id":"60","branch":"KAMOTHE","address":"DHARTI COMPLEX, SHOP NO.7,8,9310 & 11, PLOT NO. 60/61, SECTOR 18, KAMOTHE II, PANVEL-","city":"NAVI MUMBAI","district":"RAIGAD","state":"MAHARASHTRA","bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED"}]}


######   *vi The user will be prompted to continue by pressing '1'( without the single quotes) and quit by pressing '0'*
        
        Pressing 1 would start the process form step ii and pressing 0 would end the execution
   


