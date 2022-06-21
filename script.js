console.log("Hello world!");
//Declaring variable
var userName;

//Assigning a value to userName
userName = "Alberto";
let userAge = 24;

console.log(userName);
console.log(userAge);

//Declaration and assign
let userEmail="student@email.com";
console.log(userEmail);

//Constants (value cannot change)
const url="www.mysite.com";

//document.write(userName,userEmail,userAge,url);
//document.write("Username: " + userName + " User email: " + userEmail + " User age: " + userAge + " Webpage: " + url);
//document.write("<p>Username: " + userName + "</p><p>User email: " + userEmail + "</p><p>User age: " + userAge + "</p><p>Webpage: " + url + "</p>");
document.write(`
    <p>Username: ${userName}</p>
    <p>User email: ${userEmail}</p>
    <p>User age: ${userAge}</p>
    <p>Webpage: ${url}</p>`);

// CLASS EXERCISE #1
//Declaring variables
let jobTitle = "music producer";
let geoLocation = "Ireland";
let partnerName = "Trish";
let numberChildren = 2;
//Writing the fortune
document.write(`<p>You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren} kids.</p>`);

//CLASS EXERCISE #2
let employeeName = "Martin";
let employeeEmail = "martin23@gmail.com";
let employeePass = "123abc";
let employeeAge = 20;
let employeeCountry = "Canada";
let employeeSalary = 2500;

console.log(`Name: ${employeeName}\nEmail: ${employeeEmail}\nAnnual salary: $${employeeSalary*12}`);