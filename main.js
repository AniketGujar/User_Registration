const readlineSync = require('readline-sync');


class UserRegistartion {

    //User First Name Validation
    firstName = (first_Name) => {
        // readlineSync.question('Enter your First Name: ');
        let firstNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
        let firstNam =first_Name;
        const result = firstNam.match(firstNamePattern);
        // if (result == null) {
        //     console.log("Please Enter Valid First Name(Starts with capital, Min 3 char)");
        //     this.firstName();
        // }
        return result;
    }

    //User Last Name Validation
    lastName = (lastName) => {
        let lastNamePattern = /^[A-Z]+[a-zA-Z]{2,}$/;
        let last_Name = lastName;
        // readlineSync.question('Enter your Last Name: ');
        const result = last_Name.match(lastNamePattern);
        // if (result == null) {
        //     console.log("Please Enter Valid Last Name(Starts with capital, Min 3 char)");
        //     this.lastName();
        // }
        return result;
    }

    //User Email Validation
    userEmail = (mail) => {
        let emailPattern = /^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$/;
        let email = mail;
        // readlineSync.question('Enter your Email-Id: ');
        const result = email.match(emailPattern);
        // if (result == null) {
        //     console.log("Please Enter Valid Email ");
        //     this.userEmail();
        // }
        return result;
    }

    //User Mobile Number Validation
    mobileNumber = (number) => {
        let mobileNumPattern = /^([+]*[1-9]{1}[-]*)[-0-9]{1,4}[\" \"]([1-9]?[0-9]{9})$/;
        let mobileNum = number;
        // readlineSync.question('Enter your Mobile Number: ');
        const result = mobileNum.match(mobileNumPattern);
        // if (result == null) {
        //     console.log("Please Enter Mobile Number (Country Code <Space> Number)");
        //     this.mobileNumber();
        // }
        return result;
    }

    //User Password Validation
    userPassword = (pass_word) => {
        let PasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        let password = pass_word;
        // readlineSync.question('Enter your Password: ', { hideEchoBack: true });
        const result = password.match(PasswordPattern);
        // if (result == null) {
        //     console.log("Please Enter Password:(1 Number, 1 UpperCase Letter, 1 Symbol, Min 8 Char) ");
        //     this.userPassword();
        // }
        return result;
    }
}

module.exports = new UserRegistartion();