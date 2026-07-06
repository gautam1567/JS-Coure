const accountId = 144553;
let accountEmail = "gautamyadav1567@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 24; // Not Allowed


accountEmail ="gy,gy.com";
accountPassword = "435"
accountCity = "Dehradun";


console.log(accountId);

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
