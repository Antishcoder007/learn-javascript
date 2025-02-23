// first javascript program
console.log("Hello Antish")

// understanding variables

const accountId =144553 // cannot change, value the variable have constant value through out the program
//accountId =234235 // this will give error
console.log(accountId)

let accountEmail = "antish@gmail.com" // we can assign a variable by let and also change values
console.log(accountEmail)

var accountPass = "1234"// prefer not to use var because of issue in  block scope and functional scope
console.log(accountPass)

accountCity = "Jaipur"
console.log(accountCity)

// here we have to write console.log many time
// to overcome this problem be can use table console.table
// to get or display all tha variable value

console.table([accountId,accountEmail,accountPass,accountCity])

//here we get a table 
// |(indedx) | values
// |   0     | 1445533
// |  1      | 'antish@gmail.com'
// |  2      | '1234'
// |  3      | 'jaipur'

