const accountId = 1234
let accountEmail = "dsadangi31012002@gmail.com"
var accountPassword = "12345"
accountCity ='Bhawanipatna'

// accountId = 2 // changing variable with const is not alowed
accountEmail =  "dsada@gafn.coin"
accountPassword = '3214'
accountCity = "Cuttack"
let accountState

//var is not used for scope issues
//let can be declared with no assignment
//const must hava an assignment
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


let a = 1000
const b = a
a = 200
console.log(b)
