const readlineSync = require('readline-sync');
let fName = "";

firstName = () => {
    let firstNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
    fName = readlineSync.question('Enter your name: ');
    const result = fName.match(firstNamePattern);
    if (result == null) {
        console.log("Please Enter Valid First Name(Starts with capital, Min 3 char)");
        firstName();
    }
}
firstName();
console.log("HI " + fName + " !");