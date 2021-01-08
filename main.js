const readlineSync = require('readline-sync');
let first_Name = "";

//User First Name Validation
firstName = () => {
    let firstNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
    first_Name = readlineSync.question('Enter your First Name: ');
    const result = first_Name.match(firstNamePattern);
    if (result == null) {
        console.log("Please Enter Valid First Name(Starts with capital, Min 3 char)");
        firstName();
    }
}

//User Last Name Validation
lastName = () => {
    let lastNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
    let last_Name = readlineSync.question('Enter your Last Name: ');
    const result = last_Name.match(lastNamePattern);
    if (result == null) {
        console.log("Please Enter Valid Last Name(Starts with capital, Min 3 char)");
        lastName();
    }
}

//User Email Validation
userEmail = () => {
    let emailPattern = /^([a-z]+[0-9a-z-!#$%+^&*_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}/;
    let email = readlineSync.question('Enter your Email-Id: ');
    const result = email.match(emailPattern);
    if (result == null) {
        console.log("Please Enter Valid Email ");
        userEmail();
    }
}

//User Mobile Number Validation
mobileNumber = () => {
    let mobileNumPattern = /^([+]*[1-9]{1}[-]*)[-0-9]{1,4}[\" \"]([1-9]?[0-9]{9})$/;
    let mobileNum = readlineSync.question('Enter your Mobile Number: ');
    const result = mobileNum.match(mobileNumPattern);
    if (result == null) {
        console.log("Please Enter Mobile Number ");
        mobileNumber();
    }
}

//User Password Validation
userPassword = () => {
    let PasswordPattern = /[A-Za-z\\d@$!%*?&]{8,}/;
    let password = readlineSync.question('Enter your Password: ', {hideEchoBack:true});
    const result = password.match(PasswordPattern);
    if (result == null) {
        console.log("Please Enter Password:(1 Symbol, 1 Number, 1 UpperCase Letter, Min 8 Char) ");
        userPassword();
    }
}

firstName();
console.log("HI " + first_Name + " !");
lastName();
userEmail();
mobileNumber();
userPassword();