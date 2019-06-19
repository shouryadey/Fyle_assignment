#https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001
#Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwOTE4OTE2LCJleHAiOjE1NjEzNTA5MTZ9.JRcmxx4_47jHXrqy4_249C6UhUVUMEoKYMo6UuZ26f0

char=1
while [ $char -eq 1 ]
do
	read -p "IFSC-code : " a 
	read -p "limit : " b
	read -p "offset : " c

	HTTP=" https://protected-plateau-55954.herokuapp.com/bankdetails?"
	IFSC="IFSC_code=$a&"
	limit="limit=$b&"
	offset="offset=$c"
	URL=$HTTP$IFSC$limit$offset
	#echo $URL
	#curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwOTE4OTE2LCJleHAiOjE1NjEzNTA5MTZ9.JRcmxx4_47jHXrqy4_249C6UhUVUMEoKYMo6UuZ26f0" http://localhost:3000/bankdetails?IFSC_code=ABHY0065001
	curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTYwOTE4OTE2LCJleHAiOjE1NjEzNTA5MTZ9.JRcmxx4_47jHXrqy4_249C6UhUVUMEoKYMo6UuZ26f0"$URL
	echo " "
	read -p "'0' to quit else '1' to continue : " char
done