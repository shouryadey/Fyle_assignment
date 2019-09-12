#https://protected-plateau-55954.herokuapp.com/bankdetails?IFSC_code=ABHY0065001
#Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTY4MzIzMTM2LCJleHAiOjE1Njg3NTUxMzZ9.3M0xRclV2QscVrwOcDWe_M3PUjnWUrStyTxsTuD82YU
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
	curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNTY4MzIzMTM2LCJleHAiOjE1Njg3NTUxMzZ9.3M0xRclV2QscVrwOcDWe_M3PUjnWUrStyTxsTuD82YU"$URL
	echo " "
	read -p "'0' to quit else '1' to continue : " char
done
