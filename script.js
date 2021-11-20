console.log("Hello Rest Countries API Data")// Checking the Print 

//1. Create A XHR Object

var request=new XMLHttpRequest();

//2. Create a Connection
//Get Method- Ask the data in Server

request.open('GET',"https://restcountries.com/v2/all",true);

//3. send the Request 
request.send();

//4. data conversion 
//*Information status code -200 
//data successfully retrieved from server

request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
    data.forEach(element => {
        console.log("Flags Info :" ,element.flags)
        console.log("Country Name :",element.capital)
        console.log("Region :",element.region)
        console.log("Sub-Region :",element.subregion)
        console.log("Population :",element.population)
    });
}

