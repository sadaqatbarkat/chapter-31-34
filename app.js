//Q1
// let date = new Date()
// document.write(date)

// Q2


// let arrMonth = ["January","February","March","April","May","June","July","Augus","September","October","November","December"]

// let monthes =  new Date ();
// alert("Current month: "+ arrMonth[monthes.getMonth()])

// Q3
// let arrDays = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

// let day = new Date();

// alert("Today is "+ arrDays[ day.getDay()])


// Q4

// let arrSat = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
// let setDay = new Date()
// let res= arrSat[setDay.getDay()]


// if(res===arrSat[0]|| res===arrSat[6]){
// 	alert("It's Fun day")
// }





//Q5
// let dateInfo = new Date();
// let info = dateInfo.getDate()

// if(info<=15){
// 	alert("First fifteen days of the month")
// }else{
// 	alert("Last days of the month")
// }

// Q6 


// let old = new Date ();
// document.write("Current Date: "+old + "<br>")
// document.write( "Elapsed milliseconds since January 1,1970: " +old.getTime() + "<br>")

//Q7

// let check = new Date ()
// let check1 = check.getHours()
// let check2 = check.getMinutes()

// if (check1>=12){
// 	alert("It's PM")
// }else{
// 	alert("It's AM")
// }



// Q8
// let laterDate = new Date("31 December 2024")
// document.write("Later Date: "+ laterDate)



// 9

// let firstRamdan = new Date ("11 March 2024")
// let pastDays = new Date ()
// let res =  pastDays.getTime() - firstRamdan.getTime()
// let total = res / (1000*60*60*24)
// document.write(Math.round(total)+ "days have passed since 1st Ramadan ,2024")


// // 10			

// let current = new Date ();
// document.write(current +"<br>")
// let check =  new Date ("1 January 2024")
// let seconds = current.getTime() -  check.getTime()
// document.write(Math.round( seconds/(1000*60))+ " seconds has passed since begining of " + current.getFullYear())


// Q11

// let currentTime =  new Date ();
// document.write(currentTime  + "<br>")
// let good =  new Date ()
// good.setHours(6)
// document.write(good)


// Q12
// let currentYear =  new Date ()
// document.write("current date: "+ currentYear   + "<br>")
// let set =  new Date ()
// set.setFullYear("1924")
// document.write("100 years back , it was "+ set)


// Q13

// let age = prompt("What is your age?")
// document.write("Your age is "+ age +"<br>")
// let infoAge = new Date ()
// let info2 =  infoAge.getFullYear()
// let find =  info2- age;
// document.write("Your birth year is " + find)



// Q14
let customerName = prompt("Enter the customer name")
let month = prompt("Enter the Current Month")
let units = +prompt("Enter the number of units")
let charges = +prompt("Enter the charges per unit");
let net = units*charges
let late =  net+350

document.write(

	"<table>"    
	+"<tr>"  
	+"<td>"+ "Customer Name: " +"</td>"+ "<th>" +  customerName+"</th>"
	+"</tr>"
	
	+"<tr>"  
	+"<td>"+ "Month: " +"</td>"+ "<th>" +  month+"</th>"
	+"</tr>"

	+"<tr>"  
	+"<td>"+ "Number of units: " +"</td>"+ "<th>" + units+"</th>"
	+"</tr>"

	+"<tr>"  
	+"<td>"+ "Charges per unit: " +"</td>"+ "<th>" +  charges+"</th>"
	+"</tr>"
	+"<tr>"  
	+"<td>"+ "Net amount Payable (within Due Date ): " +"</td>"+ "<th>" +  net+"</th>"
	+"</tr>"

	+"<tr>"  
	+"<td>"+ "Late payment subcharge: " +"</td>"+ "<th>" + 350+"</th>"
	+"</tr>"
	+"<tr>"  
	+"<td>"+ "Gross Amount Payable (after Due Date ): " +"</td>"+ "<th>" + late +"</th>"
	+"</tr>"


	+"</table>"
)

























