#https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA COOPERATIVE BANK LIMITED&city=MUMBAI
#token='curl --header "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwOTE4OTE2LCJleHAiOjE1NjEzNTA5MTZ9.JRcmxx4_47jHXrqy4_249C6UhUVUMEoKYMo6UuZ26f0" '
char=1
while [ $char -eq 1 ]
do
	read -p "bank_name : " a
	read -p "city : " b 
	read -p "limit : " c
	read -p "offset : " d
	
	a=${a// /%20}
	
	b=${b// /%20}
	
	HTTP="  https://protected-plateau-55954.herokuapp.com/branchdetails?"
	bank_name="bank_name=$a&"
	city="city=$b&"
	limit="limit=$c&"
	offset="offset=$d"
	URL=$HTTP$bank_name$city$limit$offset
	#echo $URL
	#curl --header "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwOTE4OTE2LCJleHAiOjE1NjEzNTA5MTZ9.JRcmxx4_47jHXrqy4_249C6UhUVUMEoKYMo6UuZ26f0" http://localhost:3000/branchdetails?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED"&"city=MUMBAI"&"limit=5"&"offset=0
	curl --header "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwOTE4OTE2LCJleHAiOjE1NjEzNTA5MTZ9.JRcmxx4_47jHXrqy4_249C6UhUVUMEoKYMo6UuZ26f0"$URL
	echo ""
	read -p "'0' to quit else '1' to continue : " char

done 	