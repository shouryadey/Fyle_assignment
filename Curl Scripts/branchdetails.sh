#https://protected-plateau-55954.herokuapp.com/branchdetails?bank_name=ABHYUDAYA COOPERATIVE BANK LIMITED&city=MUMBAI
#token='curl --header "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTY4MzIzMTM2LCJleHAiOjE1Njg3NTUxMzZ9.3M0xRclV2QscVrwOcDWe_M3PUjnWUrStyTxsTuD82YU" '
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
	curl --header "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTY4MzIzMTM2LCJleHAiOjE1Njg3NTUxMzZ9.3M0xRclV2QscVrwOcDWe_M3PUjnWUrStyTxsTuD82YU"$URL
	echo ""
	read -p "'0' to quit else '1' to continue : " char

done 	
