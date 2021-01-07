const readlineSync = require('readline-sync');
let fName = "";

firstName = () => {
    let firstNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
    fName = readlineSync.question('Enter your First Name: ');
    const result = fName.match(firstNamePattern);
    if (result == null) {
        console.log("Please Enter Valid First Name(Starts with capital, Min 3 char)");
        firstName();
    }
}
lastName = () => {
    let lastNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
    let lName = readlineSync.question('Enter your Last Name: ');
    const result = lName.match(lastNamePattern);
    if (result == null) {
        console.log("Please Enter Valid Last Name(Starts with capital, Min 3 char)");
        lastName();
    }
}

firstName();
console.log("HI " + fName + " !");
lastName();